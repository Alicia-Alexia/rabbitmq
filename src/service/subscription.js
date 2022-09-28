const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
class SubscriptionService {
  async add(subscriptionData) {
    try {

      const user = await prisma.user.findUnique({
        where: { id: Number(subscriptionData.user_id) },
      })
      const status = await prisma.status.findUnique({
        where: { id: Number(subscriptionData.status_id) },
      })

     const subs =  await prisma.subscription.create({
        data: {
          user_id: user.id,
          status_id: status.id,
          created_at: new Date(),
          updated_at: new Date()
        }
      });
      return subs;
    }
    catch (erro) {
      console.error(erro.message);
      throw erro;
    }
  }

}

module.exports = SubscriptionService;
