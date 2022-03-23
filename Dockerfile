FROM node:16.14.0-alpine AS builder
RUN yarn global add serve
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build
COPY ./dist ./

FROM builder as production
COPY --from=builder /app/dist/ ./

EXPOSE 3000
CMD [ "serve", "-s", "dist" ]
