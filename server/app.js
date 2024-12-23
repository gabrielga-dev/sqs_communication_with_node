import express from 'express';
import routes from "./routes/index.js";
import HelloConsumer from "./adapter/messsaging/consumer/HelloConsumer.js";

const port =  (process.argv.length === 3) ? process.argv[2] : 3000;
const app = express();

app.use(express.json());
app.use(routes)
app.listen(port);

HelloConsumer.start();
console.log(`\n\nSERVER running on port ${port}\n\n`);