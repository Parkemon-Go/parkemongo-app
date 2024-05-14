FROM node:lts-alpine AS build
WORKDIR /app
COPY . .
RUN npm i -g pnpm && pnpm install && pnpm run build
CMD ["node", "/app/build/index.js"]
EXPOSE 3000