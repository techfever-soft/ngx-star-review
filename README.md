# ⭐ ngx-star-review

A light package to help you to improve your rating system.

Built with Angular Ivy 15.0.0 for Angular 14-15

#

![](https://img.shields.io/github/checks-status/techfever-soft/ngx-star-review/main)

![](https://img.shields.io/npm/l/ngx-star-review)

![](https://img.shields.io/npm/v/ngx-star-review)

![](https://img.shields.io/npm/dt/ngx-star-review)

#

## Demo and documentation

@see
[DEMO & DOCUMENTATION](https://ngx-star-review.web.app/)

#

## Getting started

`npm i -s ngx-star-review`

In your component :

`<ngx-star-review></ngx-star-review>`

Example :

```
<ngx-star-review
    [starCount]="5"
    [control]="firstReview"
    [customIcon]="{
        icon: faStarOutline,
        selectedIcon: faStarSolid
    }"
    [minDisabled]="true"
    (rating)="changeFirstReview($event)"
    mode="default"
></ngx-star-review>
```

#

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
