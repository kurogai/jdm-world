import express from "express";
import path from "path";
import { router } from "./api/routes";

const app = express();

app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({extended:true}));
app.use(router);

export { app };