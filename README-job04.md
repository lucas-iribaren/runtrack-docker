# Job 04 - Serveur Apache avec PHP Info

## Étapes réalisées

### 1. Création des fichiers
```bash
# Contenu de index.php
<?php phpinfo(); ?>

# Contenu du Dockerfile
FROM php:8.2-apache
COPY index.php /var/www/html/
EXPOSE 80
```
![Création des fichiers](./images/job04_files.png)

### 2. Construction de l'image
```bash
docker build -t apache-php-info ./job04
```
![Construction de l'image](./images/job04_build.png)

### 3. Lancement du conteneur
```bash
docker run -d -p 8080:80 apache-php-info
```
![Lancement du conteneur](./images/job04_run.png)

### 4. Vérification du serveur
```bash
docker ps
```
![Serveur en cours d'exécution](./images/job04_ps.png)
![Page PHP Info](./images/job04_browser.png)

### 5. Arrêt du conteneur
```bash
docker stop <container_id>
```
![Arrêt du conteneur](./images/job04_stop.png)
