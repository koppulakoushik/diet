# Use nginx as a base image
FROM nginx:alpine

# Copy the HTML, CSS, and JavaScript files to the nginx html directory
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/

# Expose port 80
EXPOSE 80
