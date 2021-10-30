# Install dependencies only when needed
FROM node:14 AS deps

WORKDIR /opt/app
COPY package.json ./
RUN rm -rf node_modules package-lock.json
RUN npm cache clean --force
RUN npm install

# Rebuild the source code only when needed
# This is where because may be the case that you would try
# to build the app based on some `X_TAG` in my case (Git commit hash)
# but the code hasn't changed.
FROM node:14 AS builder

ENV NODE_ENV=production
ENV NEXT_PUBLIC_API_URL=http://localhost:8080
ENV NEXT_PUBLIC_GOOGLE_CLIENT_ID=238337602864-lnvtak8e4ok227k90jjle786idmhn248.apps.googleusercontent.com
ENV NEXT_PUBLIC_GOOGLE_SECRET=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
ENV NEXT_PUBLIC_FACEBOOK_APP_ID=397250708781840
ENV NEXT_APP_SONAR_PASSWORD=root
ENV NEXT_APP_SONAR_LOGIN=admin
WORKDIR /opt/app
COPY . .
COPY --from=deps /opt/app/node_modules ./node_modules
RUN npm run build --prod

# Production image, copy all the files and run next
FROM node:14 AS runner

WORKDIR /opt/app
COPY --from=builder /opt/app/next.config.js ./
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/.next ./.next
COPY --from=builder /opt/app/node_modules ./node_modules
CMD "npm" "start"