FROM node:latest
COPY . .
RUN npm install 
CMD ["/bin/bash","./wait-for.sh", "db:5432","--timeout=45", "--","./entrypoint.sh"]
