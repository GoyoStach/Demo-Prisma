# Demo Prisma

This project is following the tutorial of Web Dev Simplified to get started with prisma and understand how it works. Here is the video of the complete tutorial [Learn Prisma In 60 Minutes](https://www.youtube.com/watch?v=RebA5J-rlwg)

## 0. Requirements

The following software must be installed:

- [Docker](https://docs.docker.com/engine/install/)
- [Node LTS 16+](https://nodejs.org/en/download/)

## 1. Getting Started

For convenience, I dockerized a porstgresql database. if you'd rather use your own database solution feel free to do so !

### 1.1 Installing the database

```bash
cd docker
docker-compose up -d
```

Once the postgres server i running you MUST create a new database in postgres. I prefer using pgAdmin but if you are confortable with commandLine you can.

You should have the following setup first before advancing further :
![PostgresInit](READMEImages/postgresInit.png?raw=true)

### 1.2 Installing dependencies

```bash
yarn install
```

### 1.3 Adding .env values

As it is bad practice to push .env files to a remote repository, i didn't push mine here.
However, in order for prisma to connect to the database, it needs it.

- Create a .env file
- Copy this line inside :

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/demo"
```

The URL is pretty self explanatory, if you want to connect to your own database modify the line above.

### 1.4 Getting started with Prisma

As prisma is already initialized in this project , it is not necessary to use the prisma CLI to generate our `schema.prisma` file. In case you want to start from the scratch refer to the [official prisma documentation](https://www.prisma.io/docs/)

OPTIONAL: In short you should use the CLI command to create your `schema.prisma` file:

```bash
npx prisma init
```

### 1.5 Migrating the model

In order to migrate the changes in `schema.prisma` to your database, run :

```bash
npx prisma migrate dev
```

## 2. Running the project

```bash
yarn devStart
```

### 2.1 Exploring the model

You can explore and modify the schema provided by prisma. The default one covers most of the use case but feel free to modify it.

:warning: Dont forget to run the migrate command ! :warning:

## 2.2 Using the functions

The file `script.ts` have a lot of function that you can use that covers most of prisma uses.

It is recommended to run first the creates function to populate the database.
