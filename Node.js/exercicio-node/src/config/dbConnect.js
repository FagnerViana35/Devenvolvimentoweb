import mongoose from "mongoose"

mongoose.connect("mongodb+srv://FagnerViana:280619Va@domvsit-sao-carlos.vcgdm.mongodb.net/exercicio-node");

let db = mongoose.connection;

export default db;