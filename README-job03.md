# Job 03 - Super Mario avec Docker

## Étapes réalisées

### 1. Recherche et installation de l'image
```bash
docker search pengbai/docker-supermario
docker pull pengbai/docker-supermario
```
![Recherche de l'image](./images/job03_search.png)
![Téléchargement de l'image](./images/job03_pull.png)

### 2. Lancement des conteneurs
```bash
# Premier conteneur sur le port 8600
docker run -d -p 8600:8080 pengbai/docker-supermario

# Deuxième conteneur sur le port 8601
docker run -d -p 8601:8080 pengbai/docker-supermario
```
![Lancement via ligne de commande](./images/job03_run_cli.png)
![Lancement via Docker Desktop](./images/job03_run_desktop.png)

### 3. Le jeu en action
![Gameplay 1](./images/job03_gameplay_1.png)
![Gameplay 2](./images/job03_gameplay_2.png)
![Gameplay 3](./images/job03_gameplay_3.png)

### 4. Arrêt et nettoyage
```bash
# Arrêt des conteneurs
docker stop <container_id>

# Suppression des conteneurs
docker rm <container_id>

# Suppression de l'image
docker rmi pengbai/docker-supermario
```
![Arrêt des conteneurs](./images/job03_stop.png)
![Suppression de l'image](./images/job03_rmi.png)
