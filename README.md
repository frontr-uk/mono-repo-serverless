```
npm run build:dapp:prod
cd dist/apps/dapp
mv ./public/serverless.yml ./
yarn install
npx serverless --debug
```
