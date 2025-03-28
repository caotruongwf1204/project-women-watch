# FROM node:20
# WORKDIR /app
# COPY package.json package-lock.json ./

# RUN npm install
# COPY . .
# RUN npm run build
# EXPOSE 3000
# CMD ["npm", "start"]

FROM node:18-alpine AS base

WORKDIR /app

RUN apk add --no-cache libc6-compat

FROM base AS deps
COPY package.json yarn.lock* package-lock.json* ./
RUN yarn install  --frozen-lockfile

# Build Next.js app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build ở chế độ standalone
RUN yarn build

# Final stage: chỉ copy file cần thiết để chạy app
FROM base AS runner
WORKDIR /app

# Copy standalone build từ builder
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Chạy Next.js app
CMD ["node", "server.js"]