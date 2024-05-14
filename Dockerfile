FROM node:lts-alpine AS build
WORKDIR /app
COPY . .
RUN npm i -g pnpm && pnpm install && pnpm run build
CMD ["node", "/app/.svelte-kit/output/server/index.js"]


EXPOSE 5173
