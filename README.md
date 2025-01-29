# CodeIt test task
## Delivery manager

### Stack

- Restfull server(Express, TypeORM, TS)
- SPA client(React, React router, TS)
- Postgres


## Demo(hosted on fly.io)
https://client-misty-silence-7676.fly.dev/

## Project setup

1. Create .env and .env.dev file as in .env.example
2. Create postgres db and provide credentials .env file or run 
```bash
   $ docker compose up --build database
```

- Server
```bash
$ cd ./server
$ npm install
$ npm run dev
```
- Client
```bash
$ cd ./client
$ npm install
$ npm run dev
```

- Using docker

```bash
$ docker compose up --build
```


