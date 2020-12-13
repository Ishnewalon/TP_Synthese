import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../services/youtube.service'
import { YoutubeVideos } from '../models/youtubeVideos'

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  videos: Array<YoutubeVideos>;
  videosList: Array<YoutubeVideos>;
  videoSelected: YoutubeVideos;
  yearSelected: number;
  year: string;

  constructor(private service: YoutubeService) {
    this.yearSelected = 1;
   }

  ngOnInit(): void {
    this.getVideos(this.yearSelected);
  }

  public getVideos(year: number): void{
    this.videos = this.service.getVideos(year);
  }

  public select (video: YoutubeVideos){
    this.videoSelected = video;
  }

  public onChange($event: any){​​
    this.yearSelected = $event.target.value;
    this.videos = this.service.getVideos(this.yearSelected);
    
    }​​    
}
