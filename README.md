# REST-API Boilerplate #

Demonstration of Requirements understanding, proposing a solution and implementation by using the latest tools and techniques. The code is based on Google Android SDK.

### What is this repository for? ###

* To provide a blue-print of all necessary component for:
  * A scalable application
  * A reusable app structure
* Version 1.0.0

## How do I get set up? ##

### How to set up ###
To set-up the project locally you need to clone this repo, from `master` or `develop` branch or some latest `TAG`

### Configuration ###

Please sync and resolve dependencies by using
- `yarn`

Set environment variables:
- `cp .env.example .env`

### Start App
- `yarn dev`
- You may access the app on `http://localhost:5000`



### Build Docker Image
- `docker build -t rest-api .`


### Run Docker Image
- Run `docker run -d -p 5000:5000 rest-api`
- You may access the running docker app on `http://localhost:5000`


### Stop Docker Container
- Run `docker stop rest-api`

### Pre-reqs

- [nodejs](https://nodejs.org)
- [npm](www.npmjs.com/‎)
- [Docker](https://www.docker.com/)
- [Bitbicket](www.bitbucket.org)
- [Bitbicket-pipelines](https://bitbucket.org/product/features/pipelines)

## Requirements ##

- See [`package.json`](/package.json)
- [Express](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [JEST](https://jestjs.io)


## Major Libraries and tools included: ##

- Jest
- Winston
- Supertest
- joi


#### Auth ####
- No auth is used for this version


## External Tools: ##

- **Pipelines**: [Bitbicket-pipelines](https://bitbucket.org/product/features/pipelines)
- **Build-Packaging**: [Docker](https://www.docker.com/)


## Code Quality ##

- `Jest`
- `Istanbol Coverage`
- `SonarCloud`

## Distribution ##

The project can be distributed using as git-repo.



## Limitation
- No Database models are included.
- Bitbucket pipeline file should be updated.


## Contribution guidelines ##

- Forks are always appreciated
