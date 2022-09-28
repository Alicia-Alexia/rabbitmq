const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
class UserService {
  async add(data) {
    try {
      const createCategory = await prisma.user.create({
        data: {
          full_name: data.full_name,
          created_at: new Date(),
        },
      })
      return createCategory;
    }
    catch (err) {
      console.error(err.message);
      throw err;
    }
  }
}

module.exports = UserService;