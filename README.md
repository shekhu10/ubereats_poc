### steps

## Day 1
```nest g application```
  then add name

install graphql and its dependencies
  ```npm i @nestjs/graphql graphql-tools graphql apollo-server-express```

install class validators for validation objects (validating dtos)
  ``` npm install class-validator```
  ``` npm install class-transformer```  // this is used to setup validation pipe , without validation pipe validation does not work


  ## Day 2
  we are going to connect to database via typeorm. typeorm is going to handle queries for us.
  So, to connect to db we need to first configure db, in usereats clone we are using postgresql.
  So, need to connect typeorm to postgresql. To do this we first need to install postgresql from official website (postgresql.app for mac) and then install postico (for mac) to run queries on postgresql (link is on postgres website)


  Mac instructions - 
  now run postgres and postico, and create a new db in postico.... now open your db in postgresql.app and it opens in terminal.

  ``` \du; ``` -> used to check all the users.
  your user must be in the user list. (username of laptop)

  ``` Alter user <username> with password '<password>' ```
  eg -> ``` alter user shekharbhardwaj with password '12345'    ```

to connect db to nestjs
we can use @nestjs/typeorm or @nestjs/sequelize or @nestjs/moongoose to connect. we are going to use typeorm.
typeorm is natively made in typescript. type orm runs on reactjs (frontend) and backend

``` npm install --save @nestjs/typeorm typeorm pg ``` pg is for postgresql

dotenv is used to load environment variables like configuration of database from .env file
So, nestjs way to use dotenv is -> @nestjs/config, it internally uses dotenv

``` npm i @nestjs/config ```
we will give 3 env files -> .test.env for testing, .dev.env for development, .prod.env for production
now which file to use will be given in bash command while running the project

to do this, we need to set environment. For this we need a package "cross-env"
``` npm i cross-env ```

now modify package.json
in start:dev -> nest start --watch
              to cross-env NODE_ENV=dev nest start --watch
now we provide our development files in the env files


Validation of envirment variables
joi is used for validation environment variables
``` npm i joi ```
joi is not a typescript module so the importing way is different as that in of typescript
  import * as Joi from 'joi';
  if we do import Joi from 'joi'; this is wrong nothing gets imported. in this case console.log(Joi) in undefined.