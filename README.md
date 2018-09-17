# JavaScript 

## Avant de commencer

* Cloner le projet
* Créer une nouvelle branche NOM_Prenom, à partir de la branche "master"

### À la fin du checkpoint
* Faire une Pull Request sur la branche "master" de ta branche de développement.

> Tout checkpoint rendu sans Pull Request ne sera pas corrigé.

### BASE DE DONNÉES

* Créer la base de données pour ton API 

* À l'aide de PHPMyAdmin ou directement en ligne de commande, crée la base de données "roadtrip".
* Importe le fichier SQL présent dans `backend/export.sql` dans la base "roadtrip" précédemment créée depuis PHPMyAdmin ou directement en ligne de commande via la commande suivante : 

    `mysql -u <username> -p roadtrip < export.sql`
    
* Modifie le fichier `backend/routes/index.js` pour établir correctement la connexion avec la base de données.


### BACKEND

Le dossier "backend" contient l'ensemble des fichiers requis pour le bon fonctionnement de l'API qui desservira ton application. Il te suffit d'initialiser le projet et de le lancer.

* Déplace-toi vers le dossier _backend_

    `cd backend`

* Lance la commande d'installation du projet afin d'initialiser celui-ci :

    `npm install`

* Lance la commande de démarrage afin de lancer le serveur NodeJS : 

    `npm start`

> L'API est accessible sur l'adresse http://localhost:1234

### DOCUMENTATION API

Voici la description de l'API fournie : 

* **/cities - GET**  
    _Affiche la liste de toutes les villes_

* **/cities/visited - GET**  
    _Affiche la liste de toutes les villes déjà visitées_

* **/cities/to-visit - GET**  
    _Affiche la liste de toutes les villes à visiter_

* **/travelers - GET**  
    _Affiche la liste de tous les participants à ce roadtrip_

* **/travelers/sort/firstname - GET**  
    _Affiche la liste de tous les participants, triés par prénom, de A à Z_

* **/travelers/sort/firstname/desc - GET**  
    _Affiche la liste de tous les participants, triés par prénom, de Z à A_

* **/travelers/sort/lastname - GET**  
    _Affiche la liste de tous les participants, triés par nom, de Z à A_

* **/travelers/sort/lastname/desc - GET**  
    _Affiche la liste de tous les participants, triés par nom, de Z à A_

* **/travelers/sort/age - GET**  
    _Affiche la liste de tous les participants, triés par âge, dans l'ordre croissant_

* **/travelers/sort/age/desc - GET**  
    _Affiche la liste de tous les participants, triés par âge, dans l'ordre décroissant_


### FRONTEND

Le dossier "frontend" contiendra l'ensemble des fichiers nécessaire à l'affichage de l'application dans ton navigateur préféré. C'est donc cette partie que tu devras développer !


## OBJECTIFS

Tu devras développer toute la partie "frontend", en **ReactJS**.

L'objectif sera de créer une application Web entièrement fonctionnelle pour un client qui organise des _roadtrip_ à travers le monde.

Voici ce que le client souhaite comme fonctionnalités : 

* Une page d'accueil :
    * On affichera le nom du site et une belle photo de voyage en fond
    * Un menu de navigation

* Un menu de navigation permettant de naviguer au sein de l'application : 
    * Vers la page d'accueil
    * Vers la page contenant la liste des villes
    * Vers la page contenant la liste des participants

* Une page listant les différentes villes du roadtrip :
    * Par défaut, il faut afficher toutes les villes : non-visitées et visitées
    * **Un code couleur** permettra de distinguer les villes déjà visitées des villes non-visitées
    * Une barre de filtres permettant d'afficher soit toutes les villes, soit uniquement les villes non-visitées, soit uniquement les villes déjà visitées

* Une page listant les différents participants du roadtrip :
    * Par défaut, il faut afficher tous les participants : nom, prénom et âge
    * Une barre de tri permettra de trier les participants par nom ou par prénom ou par âge de manière croissante ou décroissante.

> Les filtres et les tris sont optionnels, mais si ces fonctionnalités sont présentes le client sera très très content!



