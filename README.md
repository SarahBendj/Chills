# README
Ce repository contient le code source d'un projet qui nécessite d'être installé et lancé localement. Ce fichier README vous guide à travers les étapes nécessaires pour y parvenir.

## Prérequis
Avant de pouvoir installer et lancer le projet, assurez-vous que votre environnement de développement satisfait aux exigences suivantes :

- Node.js version 12 ou supérieure doit être installé sur votre machine.
  
## Installation

Pour installer le projet, suivez les étapes ci-dessous :

1. Remplissez le fichier **.env** à la racine du projet en vous basant sur le fichier **.env.example**.

2. Ouvrez votre terminal et naviguez jusqu'au répertoire contenant le projet.

3. Exécutez la commande suivante pour installer les dépendances du projet :

```bash
npm install
```

## Scripts de migration

Le dossier **/migration** contient des scripts bash qui doivent être exécutés pour initialiser ou mettre à jour la base de données du projet. Pour exécuter ces scripts, suivez les étapes ci-dessous :

1. Assurez-vous que vous avez installé et lancé le projet conformément aux instructions décrites dans la section "Installation".

2. Ouvrez votre terminal et naviguez jusqu'au répertoire **/migration**.

3. Exécutez le script correspondant à l'opération que vous souhaitez effectuer. Par exemple, pour initialiser la base de données, exécutez les commandes suivantes :

```bash
bash 1.initBDD.sh
bash 2.add_version.sh
bash 3.deploy.sh
```

Plusieurs questions vous seront posées afin d'initialiser la base de donnée.

Remarque : assurez-vous de toujours exécuter les scripts de migration dans l'ordre approprié 


## Démarrage du serveur

Une fois que vous avez installé les dépendances, et initialisé la base de donnée vous pouvez démarrer le serveur en exécutant la commande suivante :

```bash
npm run dev
```

Le serveur sera alors lancé et accessible à l'adresse http://localhost:XXXX ou XXXX est le port choisi dans le **.env**