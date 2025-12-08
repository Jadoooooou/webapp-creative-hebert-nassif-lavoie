# Rapport de Contrôle Qualité

**Nom de l'équipe :** [Les Quenouilles] <br>
**Nom du projet :** [Un ami pour toujours]  <br>
**Type de projet :** [Trace ton chemin] <br>
**Date :** 8 décembre 2024


## 📋 Table des matières

1. [Informations générales](#1-informations-générales)
2. [PARTIE 1 : Tests externes](#2-partie-1-tests-externes)
3. [PARTIE 2A : Tests internes](#3-partie-2a-tests-internes)
4. [PARTIE 2B : Bogues reçus](#4-partie-2b-bugs-reçus)
5. [PARTIE 2C : Plan de corrections](#5-partie-2c-plan-de-corrections)
6. [Accessibilité](#6-accessibilité)
7. [Performance](#7-performance)
8. [Conclusion](#8-conclusion)
9. [Annexes](#9-annexes)

---

## 1. Informations générales

### Équipe

| Membre | Rôle dans les tests | Heures consacrées |
|--------|---------------------|-------------------|
| Jade Hébert | Tests externes + internes | [3] heures |
| Félix Lavoie | Tests internes + corrections | [2] heures |
| Patrcia Nassif| Tests accessibilité + performance | [3] heures |

**Total d'heures de QA :** [6.5] heures

### Liens importants

- **Projet en ligne :** [https://jadoooooou.github.io/webapp-creative-hebert-nassif-lavoie/#/]
- **GitHub :** [https://github.com/Jadoooooou/webapp-creative-hebert-nassif-lavoie]
- **Trello (bugs) :** [https://trello.com/b/Pr19rYnB/projet-integrateur-web-5]
- **Projet testé (externe) :** [https://ryandufault.github.io/webapp-creative-benjamin-yannick-ryan/]

---

## 2. PARTIE 1 : Tests externes

### Ce que NOUS avons trouvé dans le projet de l'autre équipe

**Projet testé :** [Le serment de la Lune] <br>
**Équipe testée :** [Les trois mousquetaires] <br>
**Type :** [Trace ton chemin] <br>

### Résumé des tests effectués

**Environnements testés :**

- ✅ Chrome 120 (Desktop)
- ✅ Firefox 121 (Desktop)
- ✅ Edge (Desktop)
- ✅ Mobile 375px (DevTools)
- ✅ Tablette 768px (DevTools)
- ⚠️ Safari (non testé - pas d'accès)

**Tests complétés :**

- ✅ Tests fonctionnels (checklist complète)
- ✅ Tests responsive (3 tailles)
- ✅ Tests multi-navigateurs (Chrome, Firefox)
- ✅ Tests d'accessibilité
- ✅ Tests de cas limites

### Statistiques des bugs trouvés

| Priorité | Nombre | % |
|----------|--------|---|
| 🔴 Critiques | [0] | [0]% |
| 🟠 Majeurs | [4] | [80]% |
| 🟡 Mineurs | [1] | [20]% |
| **TOTAL** | **[5]** | **100%** |

### Liste des bugs trouvés (résumé)

**Tous les détails sont dans notre board Trello :** [https://trello.com/invite/b/68e66eab99c6fadf2dfd0b0e/ATTI462100c8687fe844207d6b55662fb307F98AACF9/projet-integrateur-web-5]


#### 🟠 Bogues Majeurs

1. **Bogue #1 : [Fin sacrifice solaire]**

   - **Description :** [Impossible de scroller pour lire tout le texte en mobile]
   - **Impact :** [Le jeu se termine de façon incomplète.]
   - **Statut chez eux :** [À faire]
   - **Carte Trello :** [https://trello.com/invite/b/68e66eab99c6fadf2dfd0b0e/ATTI510a3384761639a9ea6f14c4bbea0a8b82A861D5/projet-integrateur-web-5]


2. **Bogue #2 : [Bouton pour scroller même quand ont à pas à scroller]**

   - **Description :** [Il y a un bouton pour scroller même quand nous en n'avons pas besoin dans certains chapitres.]
   - **Impact :** [Peu avoir un bouton pour scroller même quand il n’est pas nécessaire.]
   - **Statut chez eux :** [À faire]
   - **Carte Trello :** [https://trello.com/invite/b/68e66eab99c6fadf2dfd0b0e/ATTI510a3384761639a9ea6f14c4bbea0a8b82A861D5/projet-integrateur-web-5]

3. **Bogue #3 : [Bloque de texte trop grand dans certains chapitres]**

   - **Description :** [Bloque de texte trop grand dans certains chapitres]
   - **Impact :** [Bloque de texte trop grand dans certains chapitres qui cache d’autres éléments comme le logo.]
   - **Statut chez eux :** [À faire]
   - **Carte Trello :** [https://trello.com/invite/b/68e66eab99c6fadf2dfd0b0e/ATTI510a3384761639a9ea6f14c4bbea0a8b82A861D5/projet-integrateur-web-5]
  
4. **Bogue #4 : [Flèche pour scroll trop petite en mobile]**

   - **Description :** [Flèche pour scroll trop petite en mobile]
   - **Impact :** [Doit chercher où est la flèche pour scroller dans le texte.]
   - **Statut chez eux :** [À faire]
   - **Carte Trello :** [https://trello.com/invite/b/68e66eab99c6fadf2dfd0b0e/ATTI510a3384761639a9ea6f14c4bbea0a8b82A861D5/projet-integrateur-web-5]

5. **Bogue #5 : [Images décoratives n'ont pas alt="" (vide)]**

   - **Description :** [Images décoratives n'ont pas alt="" (vide)]
   - **Statut chez eux :** [À faire]
   - **Carte Trello :** [https://trello.com/invite/b/68e66eab99c6fadf2dfd0b0e/ATTI510a3384761639a9ea6f14c4bbea0a8b82A861D5/projet-integrateur-web-5]


### Impression générale du projet testé

**Points forts observés :**

1. [Très belle interface.]
2. [L'histoire est intéressante]
3. [Il est facile de jouer]

**Axes d'amélioration identifiés :**

1. [Responsive mobile nécessite ajustements]
2.  [Problèmes de superpositions nécessite ajustements]

**Évaluation globale (1-5 étoiles) :**

- Facilité d'utilisation : ⭐⭐⭐⭐☆
- Stabilité : ⭐⭐⭐☆☆
- Design : ⭐⭐⭐⭐⭐
- Performance : ⭐⭐⭐⭐☆

---

## 3. PARTIE 2A : Tests internes

### Ce que NOUS avons testé dans NOTRE projet

### Résumé des tests effectués

**Checklist complète (à ajuster en fonction de votre projet) :**

- [✅] Navigation entre toutes les salles/chapitres
- [✅] Ajout de mémoire / Lecture des chapitres
- [✅] Édition de mémoire / Système de choix
- [✅] Suppression de mémoire / Branches narratives
- [✅] Upload d'images / Tracking des conséquences
- [✅] Tags et filtres / Toutes les fins
- [✅] Recherche / Historique des décisions
- [ ] Responsive (mobile, tablette, desktop)
- [✅] Multi-navigateurs (Chrome, Firefox)
- [✅] Navigation au clavier
- [ ] Contraste des couleurs
- [ ] Alt text sur images
- [✅] Cas limites (formulaires vides, texte long, etc.)

**Taux de réussite :** [10]/[13] tests passés = [77]%

### Environnements testés

RAS = Rien À Signaler

| Environnement | Testé | Résultat | Notes |
|---------------|-------|----------|-------|
| Chrome Desktop | ✅ | ✅ Fonctionne | Quelques bugs mineurs |
| Firefox Desktop | ✅ | ✅ Fonctionne | RAS |
| Edge Desktop | ✅ | ✅ | RAS|
| Mobile 375px | ✅ | ⚠️ Bogues trouvés | [Détails] |
| Tablette 768px | ✅ | ✅ Fonctionne | RAS |
| Desktop 1920px | ✅ | ✅ Fonctionne | RAS |


---

## 4. PARTIE 2B : Bogues reçus

### Ce que l'AUTRE équipe a trouvé dans NOTRE projet

**Équipe qui nous a testés :** [Les trois mousquetaires]  
**Date de réception :** 6 décembre 2024

### Statistiques

| Priorité | Bogues reçus | Corrigés | En cours | Pas encore faits |
|----------|------------|----------|----------|------------------|
| 🔴 Critiques | |  | | |
| 🟠 Majeurs | [5] | ✅ |  | |
| 🟡 Mineurs | [5] | ✅ | | |
| **TOTAL** | **[10]** | **[9]** | | **[1]** |

### Liste détaillée des bugs reçus

#### 🟠 Bogues Majeurs reçus

**Bogue #6 : [Rafraîchir la page réinitialise le dossier utilisateur]**

- **Description :** [Lors du refresh, le dossier lié au nom de la personne se réinitialise.]
- **Notre analyse :** [✔️ Nous confirmons le bogue.]
- **Statut actuel (8 décembre) :** ❌ Non-corrigé
- **Plan de correction :** [Empêcher la réinitialisation de la données]
- **Assigné à :** [Jade Hébert]

**Bogue #7 :  [Images manquantes en 1920px]**

- **Description :** [Certaines images (grenouille glam) ne s’affichent pas en large résolution.]
- **Notre analyse :** [❌ Il s'agit du même bogue que le #2]
- **Statut actuel (8 décembre) :** ✅ Corrigé
- **Plan de correction :** [Changer les chemins des images]
- **Assigné à :** [Felix Lavoie]
- **Date de correction :** [2025/12/05]

**Bogue #8 : [Grenouille devant les boutons sur mobile]**

- **Description :** [L’image de la grenouille se superpose aux boutons sur mobile 375px.]
- **Notre analyse :** [✔️ Nous confirmons le bogue.]
- **Statut actuel (8 décembre) :** ✅ Corrigé
- **Plan de correction :** [Ajouter un media query mobile pour repositionner la grenouille ou ajuster son échelle.]
- **Assigné à :** [Jade Hébert]
- **Date de correction :** [2025/12/05]

**Bogue #9 : [Boutons trop petits / obstrués sur mobile]**

- **Description :** [Les boutons sont difficiles à cliquer à cause de la grenouille qui se superpose.]
- **Notre analyse :** [❌ Il s'agit du même bogue que le précedent]
- **Statut actuel (8 décembre) :** ✅ Corrigé
- **Plan de correction :** [Ajouter un media query mobile pour repositionner la grenouille ou ajuster son échelle.]
- **Assigné à :** [Jade Hébert]
- **Date de correction :** [2025/12/05]

**Bogue #10 : [Stretching excessif en 1920px]**

- **Description :** [La mise en page s’étire trop en grand écran, créant une distorsion visuelle.]
- **Notre analyse :** [❌ Nous ne confirmons pas le bogue]
- **Statut actuel (8 décembre) :** ❌ Non-corrigé
- **Assigné à :** [Jade Hébert]

#### 🟡 Bogues Mineurs reçus

**Bogue #1 : [Image frogIcon.png introuvable]**

- **Description :** [L’image frogIcon.png est demandée par le site, mais la ressource n’existe pas à l’emplacement indiqué, créant une erreur GET dans la console..]
- **Notre analyse :** [✔️ Nous confirmons le bogue.]
- **Statut actuel (8 décembre) :**  ✅ Corrigé
- **Plan de correction :** [Identifier l’endroit précis où frogIcon.png est importé ou référencé]
- **Assigné à :** [Jade Hébert]
- **Date de correction :** [2025/12/07]

**Bogue #2 : [Images manquantes dans "grenouille glam"]**

- **Description :** [Certaines images des chapitres “grenouille glam” ne s’affichent pas.]
- **Notre analyse :** [✔️ Nous confirmons le bogue.]
- **Statut actuel (8 décembre) :** ✅ Corrigé
- **Plan de correction :** [Changer les chemins des images]
- **Assigné à :** [Felix Lavoie]
- **Date de correction :** [2025/12/05]

**Bogue #3 : [Attribut alt manquant sur certaines images]**

- **Description :** [Certaines images n’ont pas d’attribut alt, ce qui crée un manque d’accessibilité.]
- **Notre analyse :** [✔️ Nous confirmons le bogue.]
- **Statut actuel (8 décembre) :** ✅ Corrigé
- **Plan de correction :** [Ajouter des descriptions à chaque image]
- **Assigné à :** [Jade Hébert]
- **Date de correction :** [2025/12/07]

**Bogue #4 : [Alt non descriptifs]**

- **Description :** [Les attributs alt de certaines images ne sont pas descriptifs (par ex. “image”), ce qui nuit à l’accessibilité.]
- **Notre analyse :** [❌ Il s'agit du même bogue que le précedent]
- **Statut actuel (8 décembre) :** ✅ Corrigé
- **Plan de correction :** [Ajouter des descriptions à chaque image]
- **Assigné à :** [Jade Hébert]
- **Date de correction :** [2025/12/07]

**Bogue #5 : [Images décoratives sans alt vide]**

- **Description :** [Certaines images décoratives devraient avoir alt="" mais ont un alt incorrect ou absent.]
- **Notre analyse :** [❌ Il s'agit du même bogue que le précedent]
- **Statut actuel (8 décembre) :** ✅ Corrigé
- **Plan de correction :** [Ajouter des descriptions à chaque image]
- **Assigné à :** [Jade Hébert]
- **Date de correction :** [2025/12/07]

---

- Voir Trello pour détails complets : [[Lien](https://trello.com/b/0Nqsv0VR/projet-integrateur)]

### Notre réaction aux bugs reçus

**Bogues que nous confirmons :**

- 5 bugs confirmés comme vrais bugs

**Nouveaux bugs découverts grâce à leurs tests :**

Merci à l'équipe testeuse pour leur regard externe!

---

## 5. PARTIE 2C : Plan de corrections

### État au 8 décembre (aujourd'hui)

**Résumé de nos corrections :**

| Statut | Nombre | % du total |
|--------|--------|------------|
| ✅ Corrigés et validés | 4 | 40% |
| 🔄 En cours (sera fait d'ici le 10) | 1 | 10% |
| ❌ Non corrigés (justifiés) | 5 | 50% |

### Priorités de correction (8→10 décembre)

#### ✅ Déjà corrigés (avant le 8)

1. #8 : [Grenouille devant les boutons sur mobile] - Temps : [environ 1]h
2. #2 : [Images manquantes dans "grenouille glam"] - Temps : [environ 1]h
3. #3 : [Attribut alt manquant sur certaines images] - Temps : [environ 1]h
4. #1 : [Image frogIcon.png introuvable] - Temps : [environ 1]h

#### ⏸️ Reportés (ferons si temps après les critiques/majeurs)

**Bogues mineurs à faire si temps :**

1. #6 : [Rafraîchir la page réinitialise le dossier utilisateur] - Temps estimé : [1-2]h

#### ❌ Non corrigés (avec justification)

**Bogue 4 : [Alt non descriptifs]**
- **Pourquoi pas corrigé :** Il s'agit du même bogue que le bogue #3 (Certaines images n’ont pas d’attribut alt, ce qui crée un manque d’accessibilité). Lors de la correction du bogue #3, nous avons de même fait corriger le bogue #4.

**Bogue 5 : [Images décoratives sans alt vide]**
- **Pourquoi pas corrigé :** Il s'agit du même bogue que le bogue #3 (Certaines images n’ont pas d’attribut alt, ce qui crée un manque d’accessibilité). Lors de la correction du bogue #3, nous avons de même fait corriger le bogue #5.

**Bogue #7 : [Images manquantes en 1920px]**
- **Pourquoi pas corrigé :** Il s'agit du même bogue que le bogue #2 (Certaines images des chapitres “grenouille glam” ne s’affichent pas.). Lors de la correction du bogue #2, nous avons de même fait corriger le bogue #7.

**Bogue #9 : [Boutons trop petits / obstrués sur mobile]**
- **Pourquoi pas corrigé :** Il s'agit du même bogue que le bogue #8 (L’image de la grenouille se superpose aux boutons sur mobile 375px). Lors de la correction du bogue #8, nous avons de même fait corriger le bogue #9.

**Bogue #10 : [Boutons trop petits / obstrués sur mobile]**
- **Pourquoi pas corrigé :** Après analyse, ce comportement n’est pas un bogue. L’interface est conçue pour s’adapter aux grands écrans et occuper l’espace disponible. L’étirement observé correspond donc au fonctionnement normal prévu. Toute modification de cette mise en page relèverait d’une amélioration, non d’une correction.
- **Impact :** [Faible]

### Plan de travail (8-10 décembre)

**Lundi 8 (soir) :**

- [ ] #6 : [Rafraîchir la page réinitialise le dossier utilisateur] - Temps estimé : [1-2]h

**Mardi 9 :**

- [ ] Tests sur bugs corrigés (Équipe - 1h)
- [ ] Corrections du FIMGA (Jade et Patricia - 1h)

**Mercredi 10 (matin avant remise) :**

- [ ] Corrections mineures urgentes
- [ ] Correction français (Patricia - 1h)
- [ ] Tests finaux (Félix)
- [ ] Mise à jour documentation (Patrcia - 1h)

---

## 6. Accessibilité

### Tests effectués

#### Navigation au clavier

| Test | Résultat | Action |
|------|----------|--------|
| Tab fonctionne sur tous les éléments | ✅ | RAS |
| Focus visible | ✅ | RAS |
| Enter/Space activent les boutons | ✅ | RAS |

**Problèmes trouvés :** [0]  

#### Contraste des couleurs

**Tests effectués avec WebAIM Contrast Checker :**

RAS = Rien À Signaler

| Élément | Couleurs | Ratio | Conforme WCAG AA | Action |
|---------|----------|-------|------------------|--------|
| Texte principal | #333 sur #FFF | 12.6:1 | ❌ Trop faible | À corriger |
| Boutons | #FFF sur #007BFF | 4.5:1 | ❌ Trop faible | À corriger |


**Problèmes de contraste :** [2]  
**Plan de correction :** [Changer la couleur de notre fond de bas de page + Changer la couleur de texte et de fondà.]

#### Images et médias

| Test | Résultat | Notes |
|------|----------|-------|
| Toutes les images ont un alt | ✅ | RAS |
| Alt descriptifs (pas "image1.jpg") | ✅ | RAS |
| Images décoratives avec alt="" | ✅ | RAS |

### Score global d'accessibilité

**Résumé :**

- Navigation clavier : [1]/[1] tests passés
- Contraste : [0]/[2] éléments conformes
- Images : [10]/[10] avec alt approprié

**Score estimé : [11]/13**

---

## 7. Performance

### Tests Lighthouse

**Configuration :**

- Mode : Desktop ET Mobile
- Options : Performance, Accessibility, Best Practices

#### Résultats Desktop

| Page | Performance | Accessibility | Best Practices | Notes |
|------|-------------|---------------|----------------|-------|
| Accueil | [99]/100 | [90]/100 | [100]/100 | [Tout est en vert] |
| [Page principale] | [100]/100 | [64]/100 | [100]/100 | [Buttons do not have an accessible name + Image elements do not have [alt] attributes (grenouille)] |

#### Résultats Mobile

| Page | Performance | Accessibility | Best Practices | Notes |
|------|-------------|---------------|----------------|-------|
| Accueil | [96]/100 | [90]/100 | [100]/100 | [Tout est en vert] |
| [Page principale] | [94]/100 | [64]/100 | [100]/100 | [Buttons do not have an accessible name + Image elements do not have [alt] attributes (grenouille) + Background and foreground colors do not have a sufficient contrast ratio.] |


#### Autres optimisations

- ✅ Minification du code (build production)
- ✅ Suppression de console.log()

### Temps de chargement

**Tests manuels (connexion normale) :**

- Page d'accueil : [2] secondes
- Page principale : [1] secondes
- Page la plus lourde : [2] secondes

**Objectif :** < 3 secondes  
**Atteint :** ✅ Oui

---

## 8. Conclusion

### État global du projet au 8 décembre

**Le projet est-il prêt pour la remise finale ?**
⚠️ Presque, corrections en cours

**Résumé de la qualité :**

| Aspect | État | Commentaire |
|--------|------|-------------|
| **Fonctionnalités principales** | ✅ |
| **Bogues critiques** | ✅ |
| **Bogues majeurs** | ✅ |
| **Accessibilité** | ✅ |
| **Performance** | ✅ |
| **Responsive** | ✅ |

### Bilan des tests

**Statistiques globales :**

- **Bogues trouvés (tous) :** [10] (internes + reçus)
- **Bogues corrigés :** [5] ([50]%)
- **Bogues en cours :** [1] (seront corrigés d'ici le 10)
- **Bogues mineurs reportés :** [1]

**Temps total consacré au QA :** [6.5] heures

### Ce qui fonctionne bien ✅

1. Toutes les fonctionnalités principales sont stables
2. Design responsive sur tous les appareils
3. Aniamtion de la grenouille

### Défis rencontrés et solutions 🔧

1. **Défi :** [Notre formulaire]
   - **Solution :** [Demander de l'aide à la prof.]

2. **Défi :** [Afficher les images de chapeaux de notre jeu quand ont publie la page]
   - **Solution :** [Changer les path]

### Apprentissages 📚

**Ce que nous avons appris durant le processus QA :**

1. [L'importance de tester sur vrais appareils, pas juste DevTools]
2. [Un regard externe trouve des bugs qu'on ne voit plus]

### Confiance pour la remise finale 🎯

**Sur une échelle de 1 à 10, notre confiance est : [8]/10**

**Justification :**
[Notre projet ressemble vraiment au résultat voulu et est fonctionnel.]

---

## 9. Annexes

### Annexe A : Checklist complète des tests

[- [✅] Navigation entre toutes les salles/chapitres
- [✅] Ajout de mémoire / Lecture des chapitres
- [✅] Édition de mémoire / Système de choix
- [✅] Suppression de mémoire / Branches narratives
- [✅] Upload d'images / Tracking des conséquences
- [✅] Tags et filtres / Toutes les fins
- [✅] Recherche / Historique des décisions
- [ ] Responsive (mobile, tablette, desktop)
- [✅] Multi-navigateurs (Chrome, Firefox)
- [✅] Navigation au clavier
- [ ] Contraste des couleurs
- [ ] Alt text sur images
- [✅] Cas limites (formulaires vides, texte long, etc.)]


### Annexe D : Lien vers Trello

**Board Trello avec tous les bugs :** [https://trello.com/invite/b/68e66eab99c6fadf2dfd0b0e/ATTI510a3384761639a9ea6f14c4bbea0a8b82A861D5/projet-integrateur-web-5]

**Organisation du board :**

- Colonne "Bogues trouvés" : [X] cartes
- Colonne "En correction" : [1] cartes
- Colonne "À valider" : [X] cartes
- Colonne "Corrigé" : [9] cartes


---

## ✅ Signatures

**Ce rapport a été rédigé et validé par :**

- [Jade] - [Tests externes + internes - Date : [7 décembre]
- [Patricia] - [Tests accessibilité + performance - Date : [7 décembre]
- [Félix] - [Félix Lavoie | Tests internes + corrections - Date : [7 décembre]

**Nous confirmons que ce rapport reflète fidèlement l'état de notre projet et de notre processus QA.**

---

**Date de dernière mise à jour :** 8 décembre 2024  
