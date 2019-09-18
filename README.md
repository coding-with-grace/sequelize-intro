# Sequelize Intro

- Sequelize is an Object-Relational Mapper (ORM) and can
access SQL databases from Node.js
- `npm install sequelize pg`
- (See other dependencies in package.json)
- Sequelize will transform our JS to SQL, and pass it off to pg (PostgreSQL server), allowing node to talk to PostgreSQL
- We DON'T have a Sequelize database. We have a PostgreSQL database. Sequelize is a transformer/interface that maps JS into SQL, and vice-versa