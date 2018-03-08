FROM alpine:latest

COPY . /data/vue-seed/

WORKDIR /data/vue-seed



RUN sed -i s#http://dl-cdn.alpinelinux.org#https://mirrors.aliyun.com#g /etc/apk/repositories && \
        apk add --update nodejs git nodejs-npm && \
        npm install -g bower gulp && \
        echo '{ "allow_root": true }' > /root/.bowerrc && \
        git config --global url."https://".insteadOf git:// && \
        npm install && \
        bower install

ENV ADAPTER_API_SERVER=localhost SVCAMOUNT_API_SERVER=localhost RELEASE_EDITION='prod'

EXPOSE 8080

CMD ["npm", "run dev"]