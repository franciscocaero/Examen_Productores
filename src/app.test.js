import request from 'supertest';
import app from './server.js';

// Prueba a la ruta principal
describe('GET /', () => {
    it('responds with 200', (done) => {
        request(app).get('/').expect(200, done);
    });
    });

// Prueba a la ruta '/v1/todos/productos'
describe('GET /v1/todos/productos', () => {
    it('responds with 200', (done) => {
        request(app).get('/v1/todos/productos').expect(200, done);
    });
    });

// Prueba a las demas rutas