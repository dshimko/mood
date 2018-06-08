FROM nginx:1.13
COPY etc/nginx/site.conf /etc/nginx/conf.d/default.conf
COPY app/ /app
COPY bootstrap.sh /
RUN chmod +x /bootstrap.sh
#ENTRYPOINT chmod +x /bootstrap.sh && /bootstrap.sh
#CMD [ ]
WORKDIR /app
