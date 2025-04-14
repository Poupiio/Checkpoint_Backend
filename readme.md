# Checkpoint Backend 🚀
<sub>_14 avril 2025_</sub>

## But du checkpoint :
Créer une API GraphQL avec Apollo Server et Typegraphql pour enregistrer et lire des pays avec leur code, leur nom et leur emoji.

## Packages utilisés :
- Apollo Server
- refelct-metadata
- sqlite3
- ts-node-dev
- type-graphql
- typeorm

## Objectifs :
- Créer une mutation qui prend en paramètres un code pays, un nom et un emoji et enregistre cette entrée en BDD.
- Créer une query qui renvoie la liste de tous les pays avec pour attributs : code, nom, emoji.
- Créer une query qui prend en paramètre le code pays et qui renvoie le pays en question.
- Ajouter un code continent à la mutation d'ajout de pays.
- Créer une query qui permet de récupérer tous les pays d'un continent.