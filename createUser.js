const { PrismaClient } = require('@prisma/client');
const  express  = require('express')
const prisma = new PrismaClient()
const app = express()
app.use(express.json())
app.post('/user', async(req,res)=>{
    const {full_name, status_name} = req.body
    prisma.subscription
    const createCategory = await prisma.user.create({
        data: {
            full_name: full_name,
            created_at: new Date(),
            states: {
              create: [
                {
                  created_at: new Date(),
                  updated_at: new Date(),
                  status: {
                    create: {
                      status_name: status_name,
                    },
                  },
                },
              ],
            },
          },
        })

    res.json(createCategory)
})

app.post('/event', async (req, res) => {
    const { type,subscription_id } = req.body
    const sub = await prisma.subscription.findUnique({
      where:{id: Number(subscription_id)},
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