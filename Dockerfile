FROM node:18-alpine AS base

WORKDIR /app

RUN apk add --no-cache libc6-compat

FROM base AS deps
COPY package.json yarn.lock* package-lock.json* ./
RUN yarn install --only=production

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

# Chạy Next.js app
CMD ["node", "server.js"]
