FROM imbios/bun-node:18-slim AS deps
ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get -y update && \
  apt-get install -yq openssl git ca-certificates tzdata && \
  ln -fs /usr/share/zoneinfo/Europe/London /etc/localtime && \
  dpkg-reconfigure -f noninteractive tzdata
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json bun.lockb ./
RUN bun install

# Build the app
FROM deps AS builder
WORKDIR /app
COPY . .

RUN node ./node_modules/.bin/gatsby clean
RUN node ./node_modules/.bin/gatsby build

FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/public .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
