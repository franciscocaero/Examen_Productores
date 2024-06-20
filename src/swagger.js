//Swagger
import path from 'path';
import { fileURLToPath } from 'url';
import swaggerUI from 'swagger-ui-express';
import express from 'express'

const app = express();
// Definir __dirname en módulos ES6
 const __filename = fileURLToPath(import.meta.url);
 console.log(__filename);
 const __dirname = path.dirname(__filename);


// Definición de la especificación de Swagger
 const swaggerSpec = {
      definition: {
          openapi: "3.0.0",
          info: {
              title: "Productores API",
              version: "1.0.0",
          },
          servers: [
              {
                  url: "http://localhost:3000",
              },
          ],
      },
      apis: [`${path.join(__dirname, "./routers/*.js")}`],
  };


// Middleware para manejar JSON y file uploads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export { swaggerUI, swaggerSpec };
