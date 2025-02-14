# Use Node.js 18
FROM node:18

# Establish the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Export the port
EXPOSE 4083

# Start the application
CMD ["node", "src/app.js"]
