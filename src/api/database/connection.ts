import { Sequelize } from "sequelize";
const sequelize = new Sequelize("jdm","root","",{
    "port":3306,
    "dialect":"mysql"
});

sequelize.authenticate().then(()=>{
    console.log("[+] Banco de dados inicializado com sucesso!");
}).catch((e)=>{
    console.log("[!] Falha ao conectar banco de dados")
});

export { sequelize };