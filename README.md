# NodeJS - Restify - Sequelize Sample
Exemple de service REST utilisant Restify et Sequelize pour le mapping avec Mysql
## Module utilisé 
[Restify](http://mcavage.github.com/node-restify/) : Est un module qui permet de développer des services REST. Il est plus simple qu'Express car il ne fait que du REST. 
[Sequelize](http://sequelizejs.com/) : C'est un ORM (Object-Relational-Mapper)  pour Mysql

##Installation 
Création de la base de donnée
``mysql> create database nodejs_computer_database;``

Installation des dépendances 
``npm install``

Démarrage
``node server.js`` 

##Utilisation
Lister tout les *Computer*
``curl http://localhost:8080/computers ``

Lire le *Computer* 1
``curl http://localhost:8080/computers/1 ``


