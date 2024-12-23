import swaggerJSDoc from 'swagger-jsdoc';


const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'SQS messaging with NodeJs',
        version: '1.0.0',
        description: 'API generated automatically by Swagger',
    },
    servers: [
        {
            url: 'http://localhost:3000', // URL base do servidor
        },
    ],
    components: {}
};

const options = {
    definition: swaggerDefinition,
    apis: [
        'server/routes/HelloRoutes.js'
    ],
};
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;