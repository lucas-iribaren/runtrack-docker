# Welcome to Docker - Part 2

Ce projet fait partie de l'exercice "Welcome to Docker - Part 2" où nous explorons l'utilisation de Docker pour le développement d'applications.

## Objectifs du Projet

1. Cloner et exécuter le projet welcome-to-docker
2. Analyser et comprendre les fichiers Docker
3. Créer et publier une image Docker
4. Modifier et republier l'image d'un collègue

## Captures d'écran et Étapes

### 1. Clonage et Configuration

- Clonage du projet depuis GitHub :
  ```bash
  git clone https://github.com/docker/welcome-to-docker
  cd welcome-to-docker
  ```

### 2. Construction de l'Image

- Construit l'image Docker du projet :
  ```bash
  docker build -t lucasiribaren/welcome-to-docker .
  docker images
  ```

### 3. Test de l'Application

- Lance l'application dans un conteneur :
  ```bash
  docker run -d -p 3000:3000 lucasiribaren/welcome-to-docker
  docker ps
  ```

### 4. Modification de l'Image d'un Collègue

1. Récupération de l'image de Lucy :
  ```bash
  docker pull lucymadec/welcome-to-docker
  ```

2. Modification du message dans App.js :
  ```javascript
  <p style={{ marginTop: "10px", marginBottom: "50px" }}>
    This is a modified version of Lucy's container - Welcome to Docker!
  </p>
  ```

3. Construction et publication de la version modifiée :
  ```bash
  docker build -t lucasiribaren/welcome-to-docker:lucy-mod .
  docker push lucasiribaren/welcome-to-docker:lucy-mod
  ```

## Compétences Acquises

- ✅ Création et exploitation d'une image Docker
- ✅ Modification et reconstruction d'une image Docker
- ✅ Récupération et modification d'une image Docker d'un collègue
- ✅ Publication d'images sur Docker Hub
- ✅ Gestion des versions et tags Docker

## Auteur

Lucas Iribaren

## Crédits

Image originale basée sur le projet [welcome-to-docker](https://github.com/docker/welcome-to-docker) de Docker.
Version modifiée basée sur l'image de Lucy Madec.
