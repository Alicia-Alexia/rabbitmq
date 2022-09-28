const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
class StatusService {
  async add(statustData) {
    try {
      const newStatus = await prisma.status.create({
        data: {
          status_name: statustData.status_name,
        }
      });
      return newStatus;
    }
    catch (erro) {
      console.error(erro.message);
      throw erro;
    }
  }

}

module.exports = StatusService;

