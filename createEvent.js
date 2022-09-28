const prisma = new PrismaClient()
const app = express()
app.use(express.json())

app.post('/event', async (req, res) => {
  const { type,subscription_id } = req.body
  const sub = await prisma.subscription.findUnique({
    where:{id: Number(subscription)},
  })
 
  const create_event = await prisma.event_history.create({
      data:{
        type: type,
        subscription_id: sub.id,
        created_at: new Date(),
        }    
      })
  
  res.json(create_event)
})

  app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)
  