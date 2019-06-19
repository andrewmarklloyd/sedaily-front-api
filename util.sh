#!/bin/sh

# requires env vars at build time?

cd sedaily-front-end/
npm install
npm run build
# cd ../
# cd software-engineering-daily-api
# npm install
# npm run build
# mkdir -p dist/config/front-dist
# mv ../sedaily-front-end/dist/* dist/config/front-dist
