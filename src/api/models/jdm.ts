import { INTEGER, Sequelize, STRING } from "sequelize";
import { sequelize } from "../database/connection";

const jdm = sequelize.define("jdm",{
    id:{
        type : INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name:{
        type : STRING(128),
        allowNull : false
    },
    url:{
        type : STRING(256),
        allowNull : false
    }
});

jdm.sync().then(()=>{
    console.log("JDM table inicialized");
}).catch((e)=>{
    console.error(e);
});

export { jdm };
