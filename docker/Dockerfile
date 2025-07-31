# Dockerfile to serve the 99x PWA Installer
FROM nginx:alpine
COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD echo "The application will be available at: http://localhost:8080" && nginx -g 'daemon off;' 