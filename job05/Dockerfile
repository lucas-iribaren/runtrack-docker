FROM nginx:alpine

# Installation de PHP et des dépendances nécessaires
RUN apk add --no-cache \
    php82 \
    php82-fpm \
    php82-json

# Configuration de PHP-FPM
RUN sed -i 's/user = nobody/user = nginx/g' /etc/php82/php-fpm.d/www.conf && \
    sed -i 's/group = nobody/group = nginx/g' /etc/php82/php-fpm.d/www.conf

# Configuration Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie des fichiers du jeu
COPY index.html /usr/share/nginx/html/
COPY save.php /usr/share/nginx/html/

# Création du volume
VOLUME /usr/share/nginx/html/results

# Exposition du port
EXPOSE 80

# Démarrage de PHP-FPM et Nginx
CMD ["sh", "-c", "php-fpm82 && nginx -g 'daemon off;'"]
