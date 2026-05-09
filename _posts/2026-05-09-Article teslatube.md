---
layout: post
title: "TeslaTube : le lecteur de musique YouTube qui ressemble à Spotify"
description: "TeslaTube est une application web gratuite et open source qui habille YouTube d'une interface inspirée de Spotify — playlists cloud, file d'attente, PWA installable."
permalink: /teslatube-lecteur-musique-youtube/
date: 2026-05-09
category: "Projet"
author: "Michael"
image: /assets/css/images/teslatube.png
---

# TeslaTube : le lecteur de musique YouTube qui ressemble à Spotify

**Et si vous pouviez profiter de l'interface de Spotify… mais avec tout YouTube derrière ?** C'est exactement le pari de [TeslaTube](https://mikefri.github.io/teslatube/), une application web gratuite qui transforme votre navigateur en véritable lecteur de musique.

---

## Qu'est-ce que TeslaTube ?

TeslaTube est une **application web open source** qui habille YouTube Data API d'une interface inspirée de Spotify. Résultat : un lecteur sombre, élégant, avec barre de lecture, file d'attente, playlists synchronisées dans le cloud — le tout sans abonnement.

Concrètement, vous cherchez un titre, vous l'ajoutez à une playlist, et vous écoutez. Comme sur Spotify, mais avec les milliards de vidéos de YouTube comme bibliothèque musicale.

---

## Une interface que vous connaissez déjà

Dès la première ouverture, le parallèle avec Spotify saute aux yeux. À gauche, la **barre latérale** liste vos playlists avec leur pochette. Au centre, la **vue principale** affiche les pistes avec titre, artiste et durée. À droite, la **file d'attente** montre les pistes suivantes en temps réel.

En bas, la **barre de lecture** permanente donne accès aux contrôles essentiels : lecture/pause, piste précédente, piste suivante, barre de progression, volume. Sur mobile, elle se condense en un player compact toujours visible au-dessus de la navigation.

---

## Gérez votre musique comme un pro

### Playlists synchronisées

TeslaTube propose un **système de playlists complet**. Créez-en autant que vous voulez, renommez-les, réorganisez les pistes par glisser-déposer. Toutes vos playlists sont sauvegardées sur Firebase et accessibles depuis n'importe quel appareil dès que vous êtes connecté.

La pochette de chaque playlist se génère automatiquement : si vous avez au moins quatre pistes différentes, TeslaTube compose une **mosaïque 2×2** avec les miniatures des vidéos. Un détail qui fait toute la différence.

### File d'attente intelligente

Ajoutez des titres à la file d'attente depuis n'importe quelle page, réordonnez-les à la volée, videz-la en un clic. L'onglet **"Récemment joués"** garde une trace de vos 30 dernières écoutes.

### Titres likés

Un cœur sur la barre de lecture suffit pour ajouter le titre en cours à votre playlist **❤️ Titres likés**, créée automatiquement au premier like.

---

## Des fonctionnalités pensées pour l'usage quotidien

- **🔀 Shuffle & Repeat** — lecture aléatoire ou en boucle, activables en un clic
- **😴 Sleep timer** — la lecture s'arrête automatiquement après 15 minutes, 30 minutes ou 1 heure
- **⌨️ Raccourcis clavier** — `Espace` pour pause, `→` piste suivante, `←` piste précédente
- **🎮 Media Session API** — les contrôles apparaissent sur l'écran de verrouillage et dans les notifications
- **🔍 Recherche intelligente** — résultats mis en cache, suggestions après 600 ms, historique des recherches

---

## Disponible partout, même hors navigateur

TeslaTube est une **Progressive Web App (PWA)** : installez-la sur votre téléphone ou votre bureau comme une vraie application native. Sur Android, iOS ou desktop, elle s'ouvre sans navigateur visible et profite d'une interface adaptée à chaque taille d'écran.

Sur mobile, la navigation bascule en barre du bas, le player se compacte, et la bibliothèque s'ouvre en overlay animé. Tout a été pensé pour une utilisation tactile confortable.

---

## Open source et gratuit

TeslaTube est entièrement **gratuit et open source**. Le code source est disponible sur GitHub. Vous pouvez l'héberger vous-même, le modifier, l'adapter à vos besoins.

L'application nécessite uniquement une clé YouTube Data API (gratuite jusqu'à 10 000 requêtes par jour) et un projet Firebase (plan gratuit suffisant pour un usage personnel).

---

## En résumé

TeslaTube ne cherche pas à remplacer Spotify. Il comble un vide : offrir une **expérience d'écoute soignée** pour ceux qui utilisent YouTube comme source musicale principale. Interface familière, synchronisation cloud, PWA installable — pour une application gratuite et open source, le résultat est bluffant.

> 🔗 **Essayez TeslaTube** : [mikefri.github.io/teslatube](https://mikefri.github.io/teslatube/) — Stack : HTML / CSS / JavaScript vanilla · YouTube IFrame API · Firebase Auth & Firestore.
