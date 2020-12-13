import { Injectable } from '@angular/core';
import { YoutubeVideos } from '../models/youtubeVideos';
import { PLAYLIST } from '../models/myplaylist';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  videos: Array<YoutubeVideos>;

  constructor() { }

  getVideos(year: number): Array<YoutubeVideos> {
    this.videos = PLAYLIST[year -1 ].items;
    return this.videos;
  }
}
