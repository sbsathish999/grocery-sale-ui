# Use an official Node runtime as a parent image
FROM node:alpine

# Set the working directory to /app
WORKDIR '/app'

# Copy the package.json and package-lock.json files to the container
COPY package.json .

# Install dependencies

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
