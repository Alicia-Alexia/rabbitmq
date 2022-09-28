# rabbitmq
### configuração docker compose 
<br> colocar seu usuario e senha para acessar o rabbitmq </br>
<br> usar o comando docker-compose up -d </br>

### configurando prisma 
- criar arquivo .env e passar a url com os dados corretos :
   - DATABASE_URL="postgresql://username:password@localhost:5432/streaming?schema=public"
- npx prisma init 
- npx prisma migrate dev --name initial-migration --create-only
- npx prisma migrate dev 

### pacotes do node modules utilizados:
- express
- dotenv
- prisma 
- @prisma/client

### compilar projeto 
- npm start 