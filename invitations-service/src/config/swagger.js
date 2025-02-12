import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Invitations API',
      version: '1.0.0',
      description: 'API created for the Invitations service',
    },
    servers: [{ url: 'http://localhost:4081' }],
  },
  apis: ['./src/routes/*.js'], // It will handle all the routes in the routes folder
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default swaggerDocs;
