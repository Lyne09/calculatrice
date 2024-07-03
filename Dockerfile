# Utiliser une image de base de Nginx
FROM nginx:alpine

# Copier les fichiers de l'application dans le répertoire de Nginx
COPY . /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80
