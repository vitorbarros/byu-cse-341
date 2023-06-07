import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: '1.0.0',
    title: 'Contacts API',
    description:
      'Contacts API documentation. You can test this API directly here!',
  },
  host: 'cse-341-h18v.onrender.com',
  basePath: '/',
  schemes: ['https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [],
  definitions: {
    Contact: {
      firstName: 'Joe',
      lastName: 'Doe',
      email: 'joe@email.com',
      favoriteColor: 'red',
      birthday: '1990-01-01',
    },
  },
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['../../app.mjs'];

swaggerAutogen()(outputFile, endpointsFiles, doc);
