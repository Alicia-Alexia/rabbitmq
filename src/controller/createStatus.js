const StatusService = require("../service/status");
const statusService = new StatusService();


class CreateStatus {
    async createStatus(req, res) {
        const { status_name } = req.body;
        try {
            const status = await statusService.add({
                status_name: status_name
            })
            res.status(201)
                .json({ status })
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}
module.exports = CreateStatus;
