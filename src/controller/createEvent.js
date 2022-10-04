const EventService = require("../service/event");
const eventService = new EventService();
const clients = require("../messages/client")
const client = new clients()
const consumers = require("../messages/consumer")
const consumer = new consumers()

class CreateEvent {
    async createEvent(req, res) {
        try {
            const { type, subscription_id } = req.body;
            await client.add({
                type: type,
                subscription_id: subscription_id
            })
            await consumer.add({ type: type })

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