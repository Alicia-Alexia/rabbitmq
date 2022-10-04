var amqp = require('amqplib');
require('dotenv').config()
const urlRabbit = process.env.RABBITURL

class ClientMessage {
    async add(clientData) {
      try {
        amqp.connect(urlRabbit)
        .then(function (conn) {
            return conn.createChannel();
        })
        .then(function (ch) {
                console.log(" Mensagem enviada ");
                ch.sendToQueue(clientData.type, Buffer.from(`user create  ${clientData.type},${clientData.subscription_id} `));
            return ch;
        })
      } catch (erro) {
        console.error(erro.message);
        throw erro;
      }
    }
  }

module.exports = ClientMessage;