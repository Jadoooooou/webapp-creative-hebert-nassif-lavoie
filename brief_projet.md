# Brief de Projet - À fournir à l'équipe testeuse

**Nom de votre équipe :** Les quenouilles
<br>
**Nom du projet :** Un Ami pour Toujours
<br>
**Type de projet :** Trace ton chemin  
<br>
**Date :** 3 décembre 2024

---

## 🔗 Accès au projet

**URL du site déployé :**

- GitHub: [https://github.com/Jadoooooou/webapp-creative-hebert-nassif-lavoie]


## 🔗 Accès à votre Trello pour l'ajout de fiches de bogues

- Trello: https://trello.com/invite/b/68e689ca5d95eb49cec5aff3/ATTI5738b652e10c3cb3c6cefd96a87be74bA17BCBE3/projet-integrateur


---

## 📖 Description du projet

### Concept général

Réaliser une histoire à propos d'une grenouille, dans un univers en pixel art rétro. Cette grenouille cherche désespérément à être la seule amie de l’interacteur qu'elle rencontre. À chaque chapitre, l'histoire devient de plus en plus lugubre.


---

## ✅ Fonctionnalités implémentées (DONC À TESTER)

### PRIORITÉ HAUTE (fonctionnalités principales)

#### Pour "Mémoires interactives"

Remplacer le [X] par le nombre réel de votre projet

- [ ] Navigation entre [X] salles thématiques
- [ ] Ajout de mémoire (formulaire complet)
- [ ] Édition de mémoire existante
- [ ] Suppression de mémoire
- [ ] Upload d'images (limite : [X] MB)
- [ ] Système de tags
- [ ] Recherche par mot-clé
- [ ] Filtre par tag
- [ ] Filtre par salle

#### Pour "Trace ton chemin"

Remplacer le [X] par le nombre réel de votre projet

- [ ] Lecture de 8 chapitres
- [ ] Système de choix fonctionnel
- [ ] Environ 14 branches narratives
- [ ] 3 fins différentes accessibles
- [ ] Tracking de [Points d'amitiés]
- [ ] Historique des décisions à la fin

### PRIORITÉ MOYENNE

- [Ajouter la grenouille qui hypnotise] Responsive (mobile, tablette, desktop)

### PRIORITÉ BASSE (bonus si temps)

- [ ] [ Ajouter des animations de glitch] (à vous de mentionner les priorités basses à tester pour votre projet)

---

## ❌ Fonctionnalités NON implémentées

**Important : Ne PAS reporter ces éléments comme bugs**

S'il y a des choses qui n'ont pas été faites dans votre projet et qui ne sont donc à ne pas tester, veuillez les lister ici pour laisser savoir à vos testeurs plutôt que de les faires chercher pour rien.

Par exemple:

- ❌ [Audio non obligatoire]
- ❌ [Autre]

---

## 🧪 Cas de test suggérés

Suggérez au testeurs de tester des cas précis dans votre appli. Listez-les cas ici.

### Test 1 : [Vérifier les chemins narratifs]

**Objectif :** Vérifier que [chemins narratifs] fonctionne

**Étapes :**

1. [Faire des choix]
2. [Regarder ce que ces choix influence correctement dans la narration]
3. [Avoir les bonnes fins et points d'amitiés]

**Résultat attendu :**
[Avoir une fin en lien cohérente avec les choix faits]

---

### Test 2 : [Responsive desktop]

**Objectif :** [Vérifier que le site fonctionne sur desktop]

**Étapes :**

1. Ouvrir DevTools (F12)
2. Activer le mode device (icône téléphone/tablette)
3. Sélectionner desktop
4. Tester les fonctionnalités principales
   
**Résultat attendu :**
- Tout s'affiche correctement (pas de débordement)
- Navigation fonctionne
- Boutons sont assez grands pour être cliqués

---

### Test 3 : Responsive mobile

**Objectif :** Vérifier que le site fonctionne sur mobile

**Étapes :**

1. Ouvrir DevTools (F12)
2. Activer le mode device (icône téléphone/tablette)
3. Sélectionner "iPhone SE" ou 375px
4. Tester les fonctionnalités principales

**Résultat attendu :**

- Tout s'affiche correctement (pas de débordement)
- Navigation fonctionne
- Boutons sont assez grands pour être cliqués

---

## 🐛 Problèmes connus (Ne PAS les reporter)

**Ces problèmes sont déjà identifiés et documentés :**

- [L'animation gsap des textes sont un peu scpéciales si ont change de chapitre un peu trop vite.]

---

## 🎯 Zones à tester en priorité

**Nous aimerions que vous testiez particulièrement :**

1. Que les choix fonctionnent
2. Toutes les fins de l'histoire (pour vérifier qu'elles sont atteignables)

---

## 📱 Appareils et navigateurs testés par nous

**Ce que nous avons déjà testé :**

- ✅ Chrome (Desktop)
- ✅ Firefox (Desktop)
- ⚠️ Mobile (via DevTools uniquement, pas sur vrai téléphone)
- ❌ Safari (pas d'accès)
- ❌ Tablette réelle

**Ce que vous pourriez tester en plus :**

- Safari (si vous avez un Mac/iPhone)
- Sur vos vrais téléphones
- Sur vraie tablette

---

## 🗺️ Structure du projet (Pour "Trace ton chemin")

**Arbre narratif simplifié :**
![arbre narratif](https://github.com/Jadoooooou/webapp-creative-hebert-nassif-lavoie/blob/main/medias/arbre-narratif.png) 


**Liste des fins accessibles :**
1. [Chapitre 5] - Condition : [avoir fait le choix C au chapitre 4]
2. [[Germaine nous capture dans son monde]	] - Condition : [avoir fait le choix D au chapitre 4]
3. [Germaine à étendu son monde] - Condition : [avoir dit oui chapitre 5]
4. [Germaine est prise dans son monde] - Condition : [avoir dit non chapitre 5]

---

## 📞 Contact

**Pour questions urgentes ou clarifications :**

- Teams : Patricia Nassif

**Disponibilité :**

- Réponse rapide sur Teams pendant les heures de travail
- Possibilité de meeting rapide (15-20 min) si nécessaire

---

## 💬 Notes additionnelles

[Toute autre information utile pour les testeurs]

[Exemple : "Notez que le chargement initial peut prendre 2-3 secondes à cause du nombre d'images"]

[Exemple : "L'historique des décisions se trouve dans le menu en haut à droite"]
