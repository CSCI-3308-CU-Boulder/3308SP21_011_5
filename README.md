# Class View

## Project Description
ClassView is an alternative to platforms like Piazza. With enhanced UI elements, student-focused development, and mobile first principles, ClassView is intended to be the preferred alternative to existing classroom management solutions.

## Architecture Overview

### Back End

* Java Spring Boot
  * We will use Java Spring Boot to create a REST API in which we can access data from our MySQL database.
* MySQL Database
* Swagger (API Documentation)

### Front End
* Angular 11
  * Typescript
* Angular Material

### Hosting
* AWS Free tier, most likely Amazon Aurora/RDS

### Architecture Diagram
![Imgur](https://imgur.com/PqfgBgZ.jpg)

# ClassView - Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

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

# ClassView - Backend

## Requirements

For building and running the application you need:

- [JDK 1.8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Maven 3](https://maven.apache.org)

## Running the application locally

There are several ways to run a Spring Boot application on your local machine. One way is to execute the `main` method in the `de.codecentric.springbootsample.Application` class from your IDE.

Alternatively you can use the [Spring Boot Maven plugin](https://docs.spring.io/spring-boot/docs/current/reference/html/build-tool-plugins-maven-plugin.html) like so:

```shell
mvn spring-boot:run
```
