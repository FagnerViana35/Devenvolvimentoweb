//Aqui será a comunicação com o banco
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://alura:123@alura.capml.mongodb.net/alura-node')

let db = mongoose.connection;

export default db;



//https://mongoosejs.com/
//exercicio-node