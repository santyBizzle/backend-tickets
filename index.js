const express = require("express");
const app = express();
const cors = require("./node_modules/cors");
app.use(express.json());
app.use(cors());

app.get("/getTickets", (req, res) => {
  res.json([
    {
      ticketId: "xk3d03",
      subject: "Hola, mi item esta roto",
      date: "2020-03-01 01:30:00Z",
      from: "Joaquin Perez",
      status: "SOLVED",
      body: "Mi producto llego roto, no funciona como debería",
    },
    {
      ticketId: "xx35",
      subject: "Hola, mi item no llego",
      date: "2020-03-02 05:30:00Z",
      from: "Romina Esperanto",
      status: "NEW",
      body: "Mi producto no llegó, cuando debería llegar?",
    },
  ]);
});

app.listen(9092, () => {
  console.log("Server Running On Port 9092");
});
