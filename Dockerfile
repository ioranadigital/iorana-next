# ============================================================================
# Build Stage: Compilación y creación de dependencias
# ============================================================================
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar pnpm globalmente
RUN npm install -g pnpm@9

# Copiar archivos de workspace y package.json
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY ../../lib ./lib
COPY . .

# Instalar dependencias del monorepo
RUN pnpm install --frozen-lockfile --prod=false

# Build de la aplicación con output: standalone optimizado
ENV NODE_ENV=production
RUN pnpm run build

# ============================================================================
# Runtime Stage: Imagen final minimalista
# ============================================================================
FROM node:20-alpine

WORKDIR /app

# Instalar dumb-init para mejor manejo de señales
RUN apk add --no-cache dumb-init

# Copiar solo los archivos necesarios del builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/package.json ./

# Crear usuario no-root para seguridad
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

USER nextjs

# Health check para monitoreo
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

EXPOSE 3000

# Usar dumb-init como PID 1
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "server.js"]
