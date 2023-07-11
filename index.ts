import express from 'express';
import mongoose from 'mongoose';

import { routerApi } from './src/controllers/routes';

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://admin:admin@cluster0.9dqw2ne.mongodb.net/cluster0?retryWrites=true&w=majority')
    .then(() =>{
        console.log("Conexión a mongo establecida");
    })
    .catch(() => {
        console.log("Error de conexión con mongo");
    });

routerApi(app);

app.listen(PORT, function () {
    console.log("La aplicación es está ejecutando en: http://localhost:" + PORT);
});
