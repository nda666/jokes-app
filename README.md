# Jokes Apps [WIP :construction:]
Required: 
- Nodejs 14.x
- Mysql
- Nginx
- PM2 
### Getting Started
- Install depency run:
`yarn`
- Push database with prisma: `yarn prisma db push`
- Build apps: `yarn nx run-many --target=build --all`
- Run apps: `yarn nx run-many --target=serve-prod --projects=nest,next`