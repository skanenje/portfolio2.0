# --- STAGE 1: Build the app ---
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all source code
COPY . .

# Build the app with standalone output
RUN npm run build

# --- STAGE 2: Create the production image ---
# Use a minimal Node.js runtime (smaller base image)
FROM node:20-alpine AS runner
WORKDIR /app

# The build process generates a standalone folder at ./.next/standalone
# We copy everything from the standalone folder into the root of the runner container
COPY --from=builder /app/.next/standalone ./

# Copy the public folder and static assets that the standalone server will serve
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Set the host and port
ENV PORT 3000
EXPOSE 3000

# Start the minimal production server
CMD ["node", "server.js"]