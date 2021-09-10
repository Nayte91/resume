ARG NODE_VERSION
ARG CADDY_VERSION

FROM node:${NODE_VERSION}-alpine as frontend_yarn

WORKDIR /app

COPY ./yarn.lock ./package.json ./tsconfig.json ./
RUN yarn install --frozen-lockfile

COPY . ./
RUN yarn build

FROM caddy:${CADDY_VERSION}-alpine AS server_caddy

COPY ./system/server/Caddyfile /etc/caddy/Caddyfile

WORKDIR /app

COPY --from=frontend_yarn /app/build ./public