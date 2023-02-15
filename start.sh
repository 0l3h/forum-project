#!/usr/bin/bash

export NODE_ENV=production; 
npm i; 
cd server; 
npm i; 
npm exec -y sequelize-cli db:migrate && node src/app.js