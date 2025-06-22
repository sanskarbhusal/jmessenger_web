FROM ubuntu:22.04
RUN apt update
RUN apt install -y nginx
RUN apt clean
COPY nginx.conf nginx.conf
COPY dist/ /var/www/html/
RUN cat nginx.conf > /etc/nginx/sites-enabled/default
CMD ["nginx","-g","daemon off;"]