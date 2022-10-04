var amqp = require('amqplib');
require('dotenv').config()
const urlRabbit = process.env.RABBITURL

class ConsumerMessage {
    async add(consumerData) {
      try {
        amqp.connect(urlRabbit)
        .then(function (conn) {
            return conn.createChannel();
        })
        .then(function (ch) {
            ch.prefetch(1) 
            ch.consume(consumerData.type, function (msg) {
                    console.log('........ Mensagem recebida --------', new Date(),
                        msg.content.toString());
                    ch.ack(msg); 
                return ch;
            })
        })
      } catch (erro) {
        console.error(erro.message);
        throw erro;
      }
    }
  }

module.exports = ConsumerMessage;