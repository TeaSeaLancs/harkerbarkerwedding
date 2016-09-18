FROM node:6

ADD . /harkerbarker

ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV production

RUN apt-get update && \
    apt-get install -y --force-yes git && \
    apt-get clean && \
    cd /harkerbarker && \
    npm install && \
    npm run build
    
EXPOSE 9443
EXPOSE 9000

WORKDIR /harkerbarker
USER harkerbarker
CMD ["npm", "start"]