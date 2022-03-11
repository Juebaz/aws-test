export const getDatabaseConnectionString = () => {
  const DB_NAME = 'ugram';
  const env = process.env.ENV;

  if (env === 'dev') {
    console.log('LOG : connection to Atlas');
    return `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.biqab.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
  }

  const MONGO_URL = process.env.MONGO_URL
    ? `${process.env.MONGO_URL}/${DB_NAME}`
    : `mongodb://localhost/${DB_NAME}`;

  return MONGO_URL;
};
