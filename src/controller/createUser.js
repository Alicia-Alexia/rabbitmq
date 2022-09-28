const UserService = require("../service/user");
const userService = new UserService();


class CreateUser {
    async createUser(req, res) {
        const { full_name } = req.body;
        try {
            const users = await userService.add({
                full_name: full_name,
                created_at: new Date
            })
            res.status(201)
            .json(users) 
        } catch (erro) {
            res.status(400).send(erro.message)
        }
    }
}
module.exports = CreateUser;

