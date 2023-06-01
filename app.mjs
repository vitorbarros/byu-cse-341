import express from 'express';
const app = express();

app.get('/', (req,res) => {
  res.send("Anna Barros");
});

app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));
