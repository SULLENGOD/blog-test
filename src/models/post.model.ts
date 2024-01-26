import { DataTypes, Model } from "sequelize";
import { sequelize } from '../data/connection';

export class Post extends Model {
    declare id: number;
    declare title: string;
    declare author: string;
    declare createdAt: string;
    declare content: string
};

Post.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    author: {
        type: DataTypes.STRING,
        allowNull: false
    },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },

    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
}, {sequelize})