FROM node:14
WORKDIR /out/pdp-app-fe
ADD package.json /out/pdp-app-fe
ADD package-lock.json /out/pdp-app-fe
RUN npm install
ADD . .
ENV NODE_OPTIONS="--max-old-space-size=1536"
RUN npm run build
RUN npm prune --production
CMD npm start
EXPOSE 3000