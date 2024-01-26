import { sequelize } from "./data/connection";
import app from "./app";
import "./models/post.model";
import { seedData } from "./data/seedData";


async function main() {
    try {
        await sequelize.sync({force: true});
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

main();