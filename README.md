# projetFullStack

# Les étapes à suivre pour créer le projet

###### Utiliser le port 3008 pour le json-server -> json-server -w ./data.json --port 3008


1- Créer le projet
   -> ng n PROJECT_NAME --routing

2- Lancer VSC
    -> code .

3- Installer les libs
    -> npm i g bootstrap --save
    -> npm i g jquery --save
    -> npm i g @fortawesome/fontawesome-free --save
    -> npm i g json-server --save

4- Config des libs dans angular.json
    -> Remplacer avec 
        "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/@fortawesome/fontawesome-free/css/all.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]

5- Changer le html dans app.component.html
    ctrl + a, ctrl + x

6- Ajouter les imports suivant dans app.module.ts
    -> HttpClientModule,
    -> FormsModule,
    -> ReactiveFormsModule

7- Lancer app
    -> npm start    ou ng serve (npm start appel ng serve)
        le port par défaut peut être défini par --port XXXX


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


==================================================

Fixed bug for image display
    -> Instead of <img src="" alt=""> use <img [src]="['']">

==================================================

Connecting project to repo on github

1- Link to github repo
    -> git remote add origin https://github.com/Ishnewalon/TP_Synthese.git

2- Prepare the project
    -> git add .

3- Commit project
    -> git commit -m "COMMENT"

4- Push the project
    -> git push -u origin master

===================================================

Launching project on Github Pages

1- Change angular.json 
    "outputPath": "dist/PROJECT_NAME" becomes "docs/"

2- Build the project
    -> ng build --prod --base-href="https://ishnewalon.github.io/TP_Synthese/"

3- Push the project
    -> git add .
    -> git commit -m "COMMENT"
    -> git push -u origin master

4- Go to Github/TP_Synthse/Settings 
    -> Github Pages
    -> Chose master(branch with project) branch / docs
