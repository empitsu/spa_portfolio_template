# My portfolio

The design of this page is based on [Bootstrapious](https://bootstrapious.com/p/it-worker-portfolio-theme). However, I customized the template as follows:

* Replaced all jQuery-based features with Nuxt.js.
* Used text imported from an external JSON file.
* Added sections of the education, the certifications, the professional history, the articles, and the skills.
* Changed the design of the works section.

## Build Setup

Before starting this application, prepare a JSON file or an API endpoint that returns a JSON. You can pass the path of the JSON as an environmental variable `PORTFOLIO_DATA_PATH`. The default value is `http://localhost:4010/portfolio-data`.

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## How to Deploy


* Create your firebase project.
* Initialize your firebase project in the root directory.
  * Create `.firebaserc` with your project name.
  * cf. https://firebase.google.com/docs/cli#initialize_a_firebase_project
* Configure user name and password for basic-auth.
  * Create `.env` file in `<rootDir>/functions/` and input your user name and password as follows:
    ```
    BASIC_USER=username
    BASIC_PASSWORD=yourpassword
    ```
* Start your api and build your application with `yarn generate`.
* Deploy your app.
  ```
  yarn deploy
  ```
