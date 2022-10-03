# rabbitmq
### configuração docker compose 
- colocar seu usuario e senha para acessar o rabbitmq 
- usar o comando docker-compose up -d 

### Arquivo .env
- DATABASE_URL="postgresql://POSTGRES_DEFAULT_USER:POSTGRES_DEFAULT_PASS@localhost:5432/streaming?schema=public"
- RABBITURL = "amqp://RABBITMQ_DEFAULT_USER:RABBITMQ_DEFAULT_PASS@localhost:5672"

### configurando prisma 
- npx prisma migrate dev --name initial-migration --create-only
- npx prisma migrate dev 

### Rabbitmq
- selecionar queues e em name criar:
- subscription_restarted
- subscription_canceled  
- subscription_purchased

### pacotes do node modules utilizados:
- express
- dotenv
- prisma 
- @prisma/client

### compilar projeto 
- npm start 
