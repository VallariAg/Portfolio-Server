# Portfolio Server

## Prerequisites
- install node
- install postgres
  

Make a postgres table "blogs":
```
sudo -i -u postgres
createdb blogs
```
Then to install all prerequisites, run:
```
yarn install
``` 
## To run
### OPTION1: Precompile typescript to js
1. To compile typescript and store the javascript in /dist:
```
yarn watch
```
2. To run server, (with node):
```
yarn start
```
OR, start with nodemon:
```
yarn dev
```
### OPTION2: Don't precompile typescript to js

To run server, (with ts-node):
```
yarn start-ts
```
OR, start with nodemon:
```
yarn dev-ts
```
### Best option for development
```
yarn watch
yarn dev
```
## Use
Go to garphql playground: http://localhost:4000/graphql

Create a new post:
```
mutation {
  createPost(title: "a new post") {
    id
    title
    createdAt
  }
}
```
Update a post:
```
mutation {
  updatePost(id: 1, body: "updating post") {
    body 
    id
    title
  }
}
```
Read all posts:
```
query {
  posts{
    title
    id
  }
}
```
Read one post:
```
query {
  post(id: 1){
    title
    id
  }
}
```
Delete a post:
```
mutation {
  deletePost(id: 1) 
}
```

