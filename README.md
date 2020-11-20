# Portfolio Server

## Prerequisites
- install node
- install [postgres](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)
  

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
Go to garphQL playground: http://localhost:4000/graphql

1. Blog posts:
    - posts :GET all posts
    - post(id): GET post of id
    - createPost
    - updatePost(id)
    - DeletePost(id)

('posts' fetchs all blogs in ASC order of 'id')

2. Timeline posts:
    - allContent: GET all timeline content
    - createContent
    - updateContent
    - deleteContent

('allContent' fetchs all timeline content in DESC order of 'time')

3. getPassword: returns SHA encrypted password *hardcoded* in resolver    

4. Static content: 
    '/' serves /content/
- Images inside Blogs are fetched from /content/blog/{blogID}/
- Blog's header/card image are fetched from /content/blog/{blogID}/{blogID}.jpg


# Tech Stack
- typescript node
- GraphQL
- express
- [mikro-orm](https://mikro-orm.io/)
- postgres
