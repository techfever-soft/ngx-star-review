# ⭐ ngx-star-review

A light package to help you to improve your rating system.

![](https://img.shields.io/npm/v/ngx-star-review) ![](https://img.shields.io/npm/dt/ngx-star-review)
![](https://img.shields.io/npm/l/ngx-star-review)

## Getting started

`ng add @fortawesome/angular-fontawesome`

then

`npm i -s ngx-star-review`

Use it directly :

`<ngx-star-review></ngx-star-review>`

#

A fast example :

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

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Code scaffolding

Run `ng generate component component-name --project ngx-star-review` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-star-review`.

> Note: Don't forget to add `--project ngx-star-review` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build ngx-star-review` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-star-review`, go to the dist folder `cd dist/ngx-star-review` and run `npm publish`.

## Running unit tests

Run `ng test ngx-star-review` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
