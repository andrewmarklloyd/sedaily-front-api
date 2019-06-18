#!/bin/bash

# requires env vars at build time?

function build() {
  cd sedaily-front-end/
  # git pull origin
  npm run build:dev
  cd ../
  cd software-engineering-daily-api
  # git pull origin
  npm run build
  mkdir -p dist/config/front-dist
  mv ../sedaily-front-end/dist/* dist/config/front-dist
}

function start() {
  cd software-engineering-daily-api && node dist/index.js
}

if [[ ${1} == 'build' ]]; then
  build
elif [[ ${1} == 'start' ]]; then
  start
fi
