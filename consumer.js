var amqp = require('amqplib');
require('dotenv').config() 

// npx ts-node src/messages/consumer.js
// conectando com o rabbitmq
const urlRabbit = process.env.RABBITURL
amqp.connect(urlRabbit)
    .then(function(conn){
        console.log('conectado!');

        return conn.createChannel();
    })
.then(function (ch) {
    const typeUser = 'subscription_purchased'
    //subscription_restarted, subscription_canceled
    console.log('canal criado');

    ch.prefetch(1) // para mandar uma menagem por vez
    ch.consume(typeUser, function (msg) {
        setTimeout(function () {
            console.log('........ Mensagem recebida --------', new Date(),
            msg.content.toString());

            
        ch.ack(msg); // mensagem consumida
        //ch.nack(msg);
        }, 2000)
    })
})