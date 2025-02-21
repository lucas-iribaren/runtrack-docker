# Job 02 - Création et Modification d'Images Docker

## Étapes réalisées

### 1. Construction de l'image initiale
```bash
# Construire l'image
docker build -t lucasiribaren/welcome-to-docker .
```
![Construction de l'image](./images/job02_build.png)

### 2. Test de l'application
```bash
docker run -d -p 3000:3000 lucasiribaren/welcome-to-docker
docker ps
```
![Application en cours d'exécution](./images/job02_run.png)
![Liste des conteneurs](./images/job02_ps.png)

### 3. Modification de l'image d'une collègue
```bash
# Récupérer l'image
docker pull lucymadec/welcome-to-docker

# Construire la version modifiée
docker build -t lucasiribaren/welcome-to-docker:lucy-mod .
docker push lucasiribaren/welcome-to-docker:lucy-mod
```
![Pull de l'image](./images/job02_pull_lucy.png)
![Push de l'image modifiée](./images/job02_push_mod.png)
