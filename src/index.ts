import { sequelize } from "./data/connection";
import app from "./app";
import "./models/post.model";


async function main() {
    try {
        await sequelize.sync();
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