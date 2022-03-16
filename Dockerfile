FROM node:12.20.0-alpine3.10 as build
# The /app directory should act as the main application directory
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# Copy the app package and package-lock.json file
COPY package*.json ./

# Install node packages
RUN npm ci

# Copy or project directory (locally) in the current directory of our docker image (/app)
COPY . ./

# Build the app
RUN npm run build


# Host on nginx  
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
