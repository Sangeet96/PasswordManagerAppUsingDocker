# Use Node.js image to build the frontend
FROM node:20-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all frontend files into the container
COPY . .

# Build the React app
RUN npm run build

# Use NGINX to serve the production build
FROM nginx:alpine

# Copy the build output from the previous stage to NGINX
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the frontend
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]


# Explanation:
# FROM node:20-alpine AS build → Uses a lightweight Node.js image to build the app.
# WORKDIR /app → Sets the working directory inside the container.
# COPY package.json package-lock.json ./ → Copies dependencies first for caching efficiency.
# RUN npm install → Installs all dependencies.
# COPY . . → Copies the entire frontend code.
# RUN npm run build → Builds the React app.
# FROM nginx:alpine → Uses a lightweight NGINX image to serve the production build.
# COPY --from=build /app/dist /usr/share/nginx/html → Copies the built app into NGINX’s web directory.
# EXPOSE 80 → Exposes port 80 for the frontend.
# CMD ["nginx", "-g", "daemon off;"] → Starts the NGINX server.