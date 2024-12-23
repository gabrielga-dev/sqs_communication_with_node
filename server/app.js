import express from 'express';

const port =  (process.argv.length === 3) ? process.argv[2] : 3000;
const app = express();
app.listen(port);

console.log(`\n\nSERVER running on port ${port}\n\n`);