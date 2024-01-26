
# Blog App.

A Blog-like App with limited functionalities for POST & GET operations using node, express, sequelize, SQL server, React, and Typescript.

## Author

- Luis Martinez (Sullen)


## Installation
This application was developed using a Docker container with Azure SQL Edge and Sequelize due to the native incompatibility of SQL Server with the macOS system. Therefore, the installation guide is written with the necessary steps to set up a connection to Docker.

### Install Docker Image:

```bash
    docker pull mcr.microsoft.com/azure-sql-edge
```

Then run the container:

```bash
    docker run --cap-add SYS_PTRACE -e 'ACCEPT_EULA=1' -e 'MSSQL_SA_PASSWORD=Sullen-Sense' -p 1433:1433 --name azuresqledge -d mcr.microsoft.com/azure-sql-edge
```

The password set here is: Sullen-Sense, but you can change it to whatever you want, only you need change the password on the file "./src/data/connection"


```javascript
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("blog", "SA", "<YOUR-NEW-PASSWORD>", {
  host: "localhost",
  dialect: "mssql",
});
```
Then install the dependencies on the proyect.

### Install Blog App with bun:

```bash
  cd blog-test
  bun install
```

Run app: 
```bash
    bun run dev
```
No need to create a .env file as the app is configured with basic features.

When initializing the project with 'bun run dev,' the connection to the container will be established, and the 'blog' database will be created. Afterward, the 'Posts' table will be created, and 10 sample posts will be inserted.

After this, you should modify the 'index.ts' file in the './src' directory to prevent data reseeding and delete the previous data.

To do this, you need to change the line:

```javascript
  await sequelize.sync({force: true});
```

to:

```javascript 
  await sequelize.sync({force: false});
```

The 'main' function should look like this:

```javascript
  async function main() {
    try {
        await sequelize.sync({force: false});
        await seedData();
        app.listen(app.get('port'))
        console.log({
            server: "online",
            port: app.get('port')
        })
    } catch (error) {
        console.error(error);
    }
};
```

Now you need to initialize the frontend. If no changes were made to the API port, no additional action should be required other than the following:

### Install frontend

Navigate to './frontend' directory inside de 'blog-test' and install dependencies:

```bash 
  cd frontend
  bun install
```

Now you should be able to initialize with the command:

```bash 
  bun run dev
```


Now, the application should be correctly initialized.


    