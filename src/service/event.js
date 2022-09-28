const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

class EventService {
  async add(eventData) {
    try {
      const sub = await prisma.subscription.findUnique({
        where: {
          id: Number(eventData.subscription_id),
        },
      });
      if (!sub) {
        throw new Error("ID não existe!" );
      }
      const event = await prisma.event_history.create({
        data: {
          subscription_id: eventData.subscription_id,
          type: eventData.type,
          created_at: new Date()
        }
      });
      return event;
    } catch (erro) {
      console.error(erro.message);
      throw erro;
    }
  }
}

module.exports = EventService;