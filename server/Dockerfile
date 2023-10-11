FROM node:18.12.1-alpine3.17 AS builder

WORKDIR /app

COPY ./app/package.json ./

RUN apk update && apk add vips && \
	npm install --ignore-scripts=false -platform=linux --arch=x64  --legacy-peer-deps 

COPY ./app ./

RUN npm run build

FROM node:18.12.1-alpine3.17

ARG HOST
ENV HOST=${HOST}
ARG MONGODB
ENV MONGODB=${MONGODB}
ARG SECRET
ENV SECRET=${SECRET}
ARG ISS
ENV ISS=${ISS}
ARG AUD
ENV AUD=${AUD}
ARG CHATPDF_KEY
ENV CHATPDF_KEY=${CHATPDF_KEY}
ARG AI21_KEY
ENV AI21_KEY=${AI21_KEY}
ARG LOG
ENV LOG=${LOG}

WORKDIR /app

COPY --from=builder /app ./

# Add timezone asia/jakarta
RUN apk --no-cache --update add tzdata ca-certificates curl && \
	mkdir -p /dataondisk01 && \
	cp /usr/share/zoneinfo/Asia/Jakarta /etc/localtime && \
	echo "Asia/Jakarta" > /etc/timezone && \
	apk del tzdata

CMD ["npm", "run", "start:prod"]