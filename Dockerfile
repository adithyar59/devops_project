# Use an Nginx base image
FROM nginx:alpine

# Copy the application files to the default HTML directory
COPY . /usr/share/nginx/html

# Expose port 80 to the host
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
