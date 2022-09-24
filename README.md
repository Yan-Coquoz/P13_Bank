# P13_Bank

- ![Author](<https://img.shields.io/badge/Author-Yan Coquoz-">)
- ![GitHub P13_Bank size](<https://img.shields.io/github/repo-size/Yan-Coquoz/P13_Bank>)  
![GitHub top language](https://img.shields.io/github/languages/top/Yan-Coquoz/P13_Bank)
![GitHub language count](https://img.shields.io/github/languages/count/Yan-Coquoz/P13_Bank)

Créer avec CRA (Create-React-App)

## Information générale

Création d'une application avec un système d'authentification pour une banque

---

## Prérequis

- Un éditeur de texte `VSCode, Vim, IntelliJ...`
- [Node.js < v.16](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

---

- Lancement de l'application

```bash
npm run start
# ou
npm start
# avec Yarn
yarn start
```

- Installations des packages à la suite du clonage.

```bash
# avec NPM
npm install
# avec Yarn
yarn
```

## Dépendances ajoutées

- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/P13_Bank/react)
- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/P13_Bank/prop-types)
- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/P13_Bank/react-router-dom)
- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/P13_Bank/redux)
- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/P13_Bank/react-redux)
- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/P13_Bank/@mui/material)
- ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/P13_Bank/dev/sass)
- ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/P13_Bank/dev/prettier)
- ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/P13_Bank/dev/eslint) ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/P13_Bank/dev/eslint-config-prettier) ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/P13_Bank/dev/eslint-plugin-react)

## Scripts ajoutés

En plus des scripts natif de CRA, il y a :

- `clean`     supprime les dossiers build, dist et docs.
- `clean:all` supprime les dossiers node modules et build, dist ainsi que le fichier package-lock.json.

## Back

[Lien Github](https://github.com/Yan-Coquoz/Project-13-Bank-API)

- Lire le README
- Veiller à bien lancer le back et le serveur.  

```bash
# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Les routes Back sont disponible [ici => swagger](http://localhost:3001/api-docs/)
