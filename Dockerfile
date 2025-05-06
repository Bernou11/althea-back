FROM node:20

WORKDIR /usr/src/app

# Copy package files and install all dependencies (including prisma if in package.json)
COPY package*.json ./
RUN npm install

# Copy the rest of your app's files
COPY . .

# Generate prisma client after code is copied
RUN npx prisma generate

EXPOSE 3000

CMD [ "npm", "start" ]
