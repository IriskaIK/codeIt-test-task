# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy built files
COPY dist ./dist

# Install serve
RUN npm install -g serve

# Expose port and serve app
EXPOSE 80
CMD ["serve", "-s", "dist", "-l", "80"]