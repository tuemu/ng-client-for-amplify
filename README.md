# NgClientForAmplify

Based on `https://dev.classmethod.jp/cloud/aws/angular-cognito-api-gateway-loginpage/`
What I did are:

Set up

    $ npm install -g @angular/cli@latest
    $ ng new ng-client-for-amplify --routing
    $ cd ng-client-for-amplify

Install

    AWS-Amplify
    $ npm install --save aws-amplify

    Bootstrap4
    $ npm install --save bootstrap && npm install --save jquery popper.js

Modified files for the environment

- tsconfig.app.json
- src/environments/environment.ts
- angular.json



AuthService

    $ ng g service auth/auth

#### When you face some issue

Like following error:

    Uncaught ReferenceError: global is not defined
To resolve it, please add following 2 lines into `polyfills.ts`

    (window as any).global = window;
    global.Buffer = global.Buffer || require('buffer').Buffer;

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

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
