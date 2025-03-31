# Use Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all server files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]

# Explaination:
# FROM node:20-alpine → Uses a lightweight Node.js image.
# WORKDIR /app → Sets the working directory inside the container.
# COPY package.json package-lock.json ./ → Copies dependencies first (for caching efficiency).
# RUN npm install → Installs the dependencies.
# COPY . . → Copies the server files into the container.
# EXPOSE 3000 → Exposes port 3000 for external access.
# CMD ["node", "server.js"] → Starts the server inside the container.