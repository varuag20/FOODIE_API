# FOODIE

> Rest API for Food Delivery Businesses, providing fast and clean service for providers and users.

#  Features

*  🍽 Schedule appointments in restaurants
*  🛵 Request food orders
*  👩‍💼 Manage restaurants
*  📁 Files upload
*  👩🏻‍💻 Provider and user interface

#  Installation

**You need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**




**Install dependencies**

```yarn install```

Create your enviroment variables based on the examples of ```.env.example```

```cp .env.example .env```

After copying the examples, make sure to fill the variables with new values.

**Setup a database**

Install [Postgres](https://www.postgresql.org/) to create a database or if you have [Docker](https://www.docker.com/) in your machine, fill the environment values related to database configurations and then run the following commands in order to create a postgres container.

```docker-compose up```

Check if the containers are running

``` docker ps ```

# :runner: Getting Started

Run the transactions in order to configure all the database schemas

`npx sequelize-cli db:migrate`

Run the following command in order to start the application in a development environment:

```yarn dev```




