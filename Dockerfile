# pull the base image
FROM node:16-alpine as builder

# set the working direction
WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

COPY . /app
# install app dependencies
RUN npm ci
RUN npm run build

# Bundle static assets with nginx
FROM nginx:stable-alpine as production
# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html
# Add your nginx.conf
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 3000
# Start nginx
CMD ["nginx", "-g", "daemon off;"]