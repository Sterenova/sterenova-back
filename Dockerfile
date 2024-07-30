# Utiliser une image de Node.js officielle comme base
FROM node:14

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances, y compris TypeScript
RUN npm install
RUN npm install -g typescript

# Copier le reste de l'application
COPY . .

# Compiler l'application TypeScript
RUN npm run build

# Exposer le port sur lequel votre application va écouter
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "start"]
