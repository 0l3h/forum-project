# Askme - forum website project

## Technology stack
- HTML
- React.js
- Sass
- CSS
- PostgreSQL 
- Sequelize 
- Node.js 
- Express.js
- JavaScript
- GCP Storage
- JSON Web Tokens

## Running

After cloning this project open up the terminal, go to the server folder and run following command:

    npm i

Assuming you have Node.js and NPM on your machine, this will install all of the dependencies listed in package.json file, including dependencies needed only for development stage.

In order to successfully establish a connection to the database, in the config file we need to set a database user and its password to those set locally on our system. Go to **server/src/config/config.js** file. It should be noted that you must have a **.env** file in order to do manipulations with database, connect to it, etc. It solely depends on environment variables provided in **.env** file.

After setting up user and password, save the file, navigate to the **server** folder with your terminal and run...
    
    npx sequelize-cli db:create

This will create a database based on configuration provided, with a name provided in a **POSTGRES_DB_NAME** environment variable.

The next step is to create an actual database tables. To do that we need to make changes to the database using migration files in **server/src/migrations** directory by running this command:

    npx sequelize-cli db:migrate

When finished creating a database and a table run command bellow:

    npm start

This will start the server. Now, in order to run a client side, navigate to **client**  folder and run the same command as above:

    npm start

After few moments this will open up a website automatically in your browser on port **3000** by default and you are ready to use it.