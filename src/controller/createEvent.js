const EventService = require("../service/event");
const eventService = new EventService();
var amqp = require('amqplib');
require('dotenv').config()
const urlRabbit = process.env.RABBITURL

async function clientMessage(type, subscription_id) {
    amqp.connect(urlRabbit)
        .then(function (conn) {
            // console.log('conectado!');
            return conn.createChannel();
        })
        .then(function (ch) {
            //console.log('canal criado');

            setInterval(function () {
                console.log(" Mensagem enviada ");
                ch.sendToQueue(type, Buffer.from(`user create  ${type},${subscription_id} `));

            }, 2000)
        })
}

async function consumerMessage(type) {
    amqp.connect(urlRabbit)
        .then(function (conn) {
            //  console.log('conectado!');
            return conn.createChannel();
        })
        .then(function (ch) {
            //subscription_restarted, subscription_canceled  subscription_purchased
            // console.log('canal criado');
            ch.prefetch(1) // para mandar uma menagem por vez
            ch.consume(type, function (msg) {
                setTimeout(function () {
                    console.log('........ Mensagem recebida --------', new Date(),
                        msg.content.toString());

                    ch.ack(msg); // mensagem consumida
                    //ch.nack(msg);
                }, 2000)
            })
        })
}



class CreateEvent {

    async createEvent(req, res) {
        const { type, subscription_id } = req.body;
        clientMessage(type, subscription_id)
        consumerMessage(type)
        try {

            const event = await eventService.add({
                type: type,
                subscription_id: subscription_id
            })
            res.status(201)
                .json({ event })
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}


module.exports = CreateEvent;