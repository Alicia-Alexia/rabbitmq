const express = require ("express")
const  router = require ("./router/router")
const app = express();

app.use(express.json());
app.use(router);

const link = "http://localhost:3000/";
app.listen(3000, () => {
  console.log(`Server running at ${link}`);
});