import mongoose from "mongoose";

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

//mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@exercicio-node.g3tbb.mongodb.net/exercicio-node`)
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@apinode01.phdrg9h.mongodb.net/`)

    
let bd = mongoose.connection;

export default bd;


//https://cloud.mongodb.com/v2/626713d1c1641a0c9563d21a#metrics/replicaSet/630a28392045503de6d1f969/explorer/bd-api-node/users/find
// mongodb+srv://bd-api-node:<password>@apinode01.phdrg9h.mongodb.net/?retryWrites=true&w=majority
//fagnerviana@gmail.com.br
//28061988
//fagnerviana
