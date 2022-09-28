const SubscriptionService = require("../service/subscription");
const subscriptionService = new SubscriptionService()

class CreateSubscription {
    async createSubscription(req, res) {
        const { user_id, status_id } = req.body;
        try {
            const newSubscription = await subscriptionService.add({
                user_id: user_id,
                status_id: status_id,
                created_at: new Date(),
                updated_at: new Date()

            })
            res.status(201)
                .json({ newSubscription })
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}

module.exports = CreateSubscription;
