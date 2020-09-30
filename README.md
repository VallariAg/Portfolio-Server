# Portfolio Server

## To run
### OPTION1: Precompile typescript to js
1. To compile typescript and store the javascript in /dist:
```
yarn watch
```
2. To run server:
start with node:
```
yarn start
```
OR, start with nodemon:
```
yarn dev
```
### OPTION2: Don't precompile typescript to js

If you don't wanna compile typescript to js, run:

To not watch changes, start with ts-node:
```
yarn start-ts
```
OR, watch changes start with nodemon:
```
yarn dev-ts
```
### Best option for development
```
yarn watch
yarn dev
```


