# TeslaGuide 🚗⚡

Site Jekyll pour GitHub Pages — guide Tesla en français avec lien de parrainage.

## 🚀 Déploiement sur GitHub Pages

### 1. Créer le dépôt
1. Allez sur [github.com](https://github.com) → **New repository**
2. Nommez-le `votre-pseudo.github.io` (ex: `michael618693.github.io`)
3. Cochez **"Public"**
4. Cliquez **Create repository**

### 2. Uploader les fichiers
Option simple (sans Git) :
1. Ouvrez votre dépôt sur GitHub
2. Cliquez **"uploading an existing file"**
3. Glissez-déposez **tous les fichiers et dossiers** de ce ZIP
4. Cliquez **Commit changes**

### 3. Activer GitHub Pages
1. Allez dans **Settings** → **Pages**
2. Source : **Deploy from a branch**
3. Branch : **main** → **/ (root)**
4. Cliquez **Save**

Votre site sera en ligne à `https://votre-pseudo.github.io` en 2-3 minutes ✅

---

## ✍️ Ajouter un article

Créez un fichier dans `_posts/` avec ce format :

**Nom du fichier** : `AAAA-MM-JJ-titre-de-article.md`

**Contenu** :
```markdown
---
layout: post
title: "Mon nouvel article"
date: 2024-03-01
category: Guide
excerpt: "Description courte qui apparaît dans les cartes."
---

Votre contenu en Markdown ici...

## Titre de section

Paragraphe, listes, tableaux — tout le Markdown standard fonctionne.
```

---

## 📁 Structure du projet

```
teslaguide/
├── _config.yml          ← Configuration du site
├── index.html           ← Page d'accueil
├── blog.html            ← Liste des articles
├── _layouts/
│   ├── default.html     ← Mise en page principale
│   └── post.html        ← Mise en page article
├── _posts/
│   ├── 2024-01-15-comparatif-modeles-tesla.md
│   ├── 2024-01-22-cout-recharge-vs-essence.md
│   ├── 2024-01-29-supercharger-reseau-explique.md
│   └── 2024-02-05-autopilot-vs-fsd-differences.md
└── assets/
    └── css/
        └── main.css     ← Styles du site
```

---

## 🔗 Lien de parrainage
Actuellement configuré sur : `https://ts.la/michael618693`

Pour le modifier, cherchez cette URL dans `index.html` et `_layouts/post.html`.
