# Cahier de Charges: Trace ton chemin

## 📌 Informations du Projet

_Nom du projet:_ Un Ami pour Toujours   
_Nom de l'équipe:_ Les quenouilles   
_Membres:_

- [Patricia Nassif] - Chef de projet
- [Jade Hébert] - Responsable design
- [Félix Lavoie] - Données + Systèmes
     
_Date de début:_ [08/10/2025]      
_Date de livraison finale:_ [12/12/2025]     
_Version du document:_ 1.0

## 🎯 1. Présentation du Projet

### 1.1 Concept général

Figma Brain Storm: https://www.figma.com/board/duRLYm9St5svNGbtXlhxVa/brainstorm?node-id=0-1&p=f&t=RMWCC4ufYfgXvTa4-0 

- Quel est le concept de l'histoire interactive?

Réaliser une histoire à propos d'une grenouille, dans un univers en pixel art rétro. Cette grenouille cherche désespérément à être la seule amie de l’interacteur qu'elle rencontre. À chaque chapitre, l'histoire devient de plus en plus lugubre.


- Quel est le genre narratif?

Le genre narratif est un mélange de fantastique, aventure, et psychologique, avec des éléments de mystère.

- Quelle est l'histoire principale? 

L’histoire suit une grenouille étrange et solitaire qui traverse un monde fantastique à la recherche d’amis. Cependant, son désir n’est pas aussi innocent qu’il le semble : elle ne veut pas simplement des amis, elle veut être la seule amie, quitte à éloigner, voire faire disparaître les autres prétendants à l’amitié. Le récit explore des thèmes comme la solitude obsessionnelle, la possession émotionnelle et la perte d’innocence.
<br>

- Qui est le personnage principal?
  
La petite grenouille Germaine (l'interacteur)

- Quel est le mécanisme de choix? (décisions morales, énigmes, actions, etc.)

Le joueur est régulièrement confronté à des questions et des choix ambigus, qui influencent la transformation du monde et du personnage.
   
"Un Ami pour Toujours" est une histoire interactive en pixel art rétro où une petite grenouille cherche à devenir la seule et unique amie de l’interacteur. Au fil des choix moraux du joueur, son véritable côté sombre se révèle progressivement. Mêlant fantastique, aventure et psychologie, le récit explore la solitude, la possession et la perte d’innocence, menant à plusieurs fins selon les décisions prises.

### 1.2 Public cible

- _Âge:_ 13+
- _Profil:_ Voici la version corrigée : Jeunes aimant les jeux narratifs expérimentaux qui mélangent le psychologique et le fantastique.
- _Niveau technique:_ Grand public
- _Temps de lecture estimé:_ 20 minutes
  
### 1.3 Objectifs du projet

- [] Créer une expérience narrative immersive et émotionnelle
- [] Développer un système de choix avec conséquences réelles
- [] Implémenter un système de sauvegarde de progression
- [] Démontrer la maîtrise de Vue.js, GSAP et Pinia
- [] Créer une interface accessible et responsive
- [] Développer un projet web

## 📖 2. Architecture Narrative

### 2.1 Synopsis détaillé

Racontez votre histoire en 1-2 paragraphes (sans spoiler les fins): 
    
Dans un monde en pixel art aux couleurs douces, une petite grenouille part à la recherche d’un ami: elle demande de joueur avec l'interacteur, d'explorer son monde virtuel, et d'apprendre à se connaître. Mais sous ses airs innocents se cache une obsession maladive : elle veut devenir notre seule et unique amie pour toujours. À mesure que le jeux avance, le monde s'assombrit, les teintes pastel disparaissent, et l'histoire prend une tournure macabre. <br>

### 2.2 Arbre narratif

Dessinez ou décrivez l'arbre de décisions de votre histoire:
    
![arbre narratif](https://github.com/Jadoooooou/webapp-creative-hebert-nassif-lavoie/blob/main/medias/arbre_narratif.png) 

### 2.3 Liste des chapitres/scènes

Minimum 8 niveaux (chapitres/scènes). Listez-les avec leurs informations:

| #       | Nom du chapitre       | Type     | Description courte                        | Choix proposés                    | Conséquences         |
| ------- | --------------------- | -------- | ----------------------------------------- | --------------------------------- | -------------------- |
| 1       |[Germaine la Grenouille]|Linéaire| Germaine se présente et souhaite nous connaître | Aucun (intro)                | N/A                  |
| 2       |[Jouons à un jeu!]     | Choix    | Germaine souhaite jouer avec nous!        | 2 choix: "jeu 1" ou "jeu 2"       | Branche A ou B       |
| 3A      |[Le festin des mouches]|Interactif| Atrrape des mouches!                      | Aucun                             | Progression histoire |
| 3B      |[Grenouille Glam]      |Interactif| Habille ta meilleure amie!                | Aucun                             | Progression histoire |
| 4       |[Laisse-moi te raconter une histoire]| Choix | Germaine nous raconte notre rencontre | 2 choix: "?" ou "savoir la fin"| Branche C ou Branche D|
| 5       |[Regarde moi dans les yeux]|Choix |Germaine se fâche et devient manipulatrice |Champs texte : bonne / mauvaise réponse| Branche E ou Branche F|
|FIN D    |[Amis pour la vie]| FIN |Notre curiosité prends le dessus: nous sommes maintenant pris dans le monde de Germaine|Aucun| Nous sommes pris dans le jeu|
|FIN E    |[Tombé dans le piège]|FIN|Notre soumission permet à Germaine de nous contrôler, et notre "ordi" aussi...|  Aucun  | Germaine nous possède |
|FIN F    |[Ereur du système]| FIN| Il semble avoir eu un erreur du jeu, suite à virus...| 1 choix: "Voulez-vous rejouez avec Germaine?" |Recommencer le jeu|

### 2.4 Fins possibles

| #   | Nom de la fin                            | Condition pour l'atteindre                       | Type (bonne/mauvaise/neutre) |
| --- | ---------------------------------------- | ------------------------------------------------ | ---------------------------- |
| 1   | [Germaine nous capture dans son monde]   | Avoir suivi le "parcours de l’amitié"            | Mauvaise |
| 2   | [Germaine à étendu son monde]            | Avoir presque suivi le "parcours de l’amitié"    | Mauvaise |
| 3   | [Germaine est prise dans son monde]      | Ne pas avoir suivi le "parcours de l’amitié"     | Bonne    |

### 2.5 Personnages principaux

| Nom                      | Rôle                 | Description                             | Apparaît dans                |
| ------------------------ | -------------------- | --------------------------------------- | ---------------------------- |
| [Germaine la Grenouille] | Personnage principal | Petite grenouille qui veut garder les interacteurs avec elle | Tous les chapitres |
| [Interacteur]            | Protagoniste         | Interacteur                             |   Tous les chapitres         |

### 2.6 Système de conséquences

Comment les choix influencent l'histoire?   

Les choix influencent la tolérance de la grenouille et à par quel moyen elle va tenter de capturer l'interacteur dans son monde

_Mécanisme choisi:_

- [ ] _Système de karma/moralité_ (points bons/mauvais)
- [ ] _Stats du personnage_ (courage, intelligence, empathie)
- [ ] _Inventaire d'objets_ (collecte d'items)
- [ ] _Relations avec personnages_ (affinités)
- [X] _Flags de choix_ (choix X débloque scène Y)
- [ ] _Combinaison de plusieurs systèmes_

_Exemple de tracking:_

```javascript
playerState: {
  karma: 0,  // -10 à +10
  inventory: ['clé', 'journal'],
  relationships: {
    marcus: 5,  // 0 à 10
    chronos: -3
  },
  flags: {
    hasActivatedMachine: true,
    knowsTheSecret: false
  }
}
```

## 🎨 3. Design et Identité Visuelle

### 3.1 Moodboard

Insérez ici 3-5 images d'inspiration:

- [Ambiance générale]
   
![Ambiance générale](https://github.com/Jadoooooou/webapp-creative-hebert-nassif-lavoie/blob/main/medias/ambiance_generale.png)   
- [Style visuel des personnages]
   
![Style visuel des personnages](https://github.com/Jadoooooou/webapp-creative-hebert-nassif-lavoie/blob/main/medias/visuel_personnage.png)   
- [Palette de couleurs]
   
![Palette de couleurs](https://github.com/Jadoooooou/webapp-creative-hebert-nassif-lavoie/blob/main/medias/palette_couleur.png) 
- [Typographie inspirante]
   
![Typographies](https://github.com/Jadoooooou/webapp-creative-hebert-nassif-lavoie/blob/main/medias/typographie.png) 
- [Animations de référence]
   
![Animations de référence](https://github.com/Jadoooooou/webapp-creative-hebert-nassif-lavoie/blob/main/medias/animations.png) 

### 3.2 Palette de couleurs

_Couleurs par ambiance/chapitre:_

- _Chapitres 1 à 3:_ [HEX 000], [HEX 324D3E], [HEX 8EA48B], [HEX BECFBB] - Tons pastels et invitants
- _Chapitres 4:_ [HEX 000], [HEX 2B4336], [HEX 728A6E] - Tons sombres
- _Chapitres 5:_ [HEX 000], [HEX FAF2AA] - Tons contastants
- _Chapitres FIN:_ [HEX 000], [HEX BECFBB], [HEX 0C0494] - Noir sur gris, plus aucunes couleurs

![Progressions des couleurs](https://github.com/Jadoooooou/webapp-creative-hebert-nassif-lavoie/blob/main/medias/progression_couleurs.png) 

_Couleurs système:_

- Boutons:

![Boutons](https://github.com/Jadoooooou/webapp-creative-hebert-nassif-lavoie/blob/main/medias/boutons.png)

- Survol:

![Boutons](https://github.com/Jadoooooou/webapp-creative-hebert-nassif-lavoie/blob/main/medias/boutons_survol.png)

- Cliqué:

![Boutons](https://github.com/Jadoooooou/webapp-creative-hebert-nassif-lavoie/blob/main/medias/boutons_clique.png)

- Champs texte:

![Boutons](https://github.com/Jadoooooou/webapp-creative-hebert-nassif-lavoie/blob/main/medias/champs_texte.png)

### 3.3 Typographie

- _Titre du jeu:_ [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P?preview.text=Une%20erreur%20fatale%20s%27est%20produite)

![police](https://github.com/Jadoooooou/webapp-creative-hebert-nassif-lavoie/blob/main/medias/police_titre.png) 
- _Texte de narration:_ [VT323](https://fonts.google.com/specimen/VT323?preview.text=Une%20erreur%20fatale%20s%27est%20produite)

![police](https://github.com/Jadoooooou/webapp-creative-hebert-nassif-lavoie/blob/main/medias/police_narration.png) 
- _Boutons de choix:_ [VT323](https://fonts.google.com/specimen/VT323?preview.text=Une%20erreur%20fatale%20s%27est%20produite)

![police](https://github.com/Jadoooooou/webapp-creative-hebert-nassif-lavoie/blob/main/medias/police_boutons.png) 
- _Messages d'erreurs:_ [Varela](https://fonts.google.com/specimen/Varela?preview.text=Une%20erreur%20fatale%20s%27est%20produite)

![police](https://github.com/Jadoooooou/webapp-creative-hebert-nassif-lavoie/blob/main/medias/police_erreur.png) 

### 3.4 Style visuel

Choisissez un ou plusieurs styles:

- [ ] Cinématique (film noir, thriller)
- [X] Illustratif (dessins, concept art)
- [X] Minimaliste (focus sur le texte)
- [ ] Immersif (photos, ambiances réalistes)
- [ ] Stylisé (flat design, géométrique)

### 3.5 Éléments visuels par chapitre

| Chapitre | Image de fond         | Effets visuels     | Sons/musique         |
| -------- | --------------------- | ------------------ | -------------------- |
| 1 | Bureau d'un ordinateur aux allures Windows95 | Apparition grenouille, animation position | Musique d'ambiance en boucle |
| 2 | Bureau d'un ordinateur aux allures Windows95 | Animation position, textes | Musique d'ambiance en boucle |
| 3 | Fond clair| Petit jeu avec des éléments à récupérer (dragable et click)| Nouvelle musique d'ambiance en boucle  |
| 4 | Fond moins clair | Apparition fenetre Windows | Musique d'ambiance se déforme + effets sonores "erreur windows  |
| 4 (suite)| Fond moins clair | Apparition texte  | Musique d'ambiance en boucle |
| 5 | Fond sombre| Spirale | Anmation de la spirale | Musique d'ambiance en boucle déformée et grave|
| FIN D| Fond noir | grenouille, ombre du texte à l'écran | Effets sonores |
| FIN E| Fond noir | Apparition texte | Effets sonores  |
| FIN F| Fond noir | Apparition fenetre Windows | Effets sonores |

## 💻 4. Spécifications Techniques

### 4.1 Stack technologique

_Frontend obligatoire:_

- [ ] Vue.js 3 (Composition API ☐ / Options API ☐)
- [ ] Vite
- [ ] Vue Router
- [ ] Pinia (state management)
- [ ] CSS
- [ ] GSAP + ScrollTrigger (optionnel selon style)

_Librairies additionnelles envisagées:_

- [ ] VueUse (composables utilitaires)
- [ ] Typed.js (effet de machine à écrire)
- [ ] Howler.js (gestion audio avancée)
- [ ] [Autre]

### 4.2 Architecture des composants

Listez vos composants Vue principaux:

_Composants de layout:_

- `AppHeader.vue` - Navigation et menu
- `SaveSlotManager.vue` - Gestion des sauvegardes
- `ProgressBar.vue` - Barre de progression dans l'histoire

_Composants de contenu:_

- `ChapterView.vue` - Vue d'un chapitre/scène
- `NarrativeText.vue` - Affichage du texte narratif
- `DialogueBox.vue` - Boîte de dialogue pour personnages
- `ChoiceButton.vue` - Bouton de choix interactif
- `ChoicePanel.vue` - Panel contenant tous les choix

_Composants système:_

- `InventoryDisplay.vue` - Affichage de l'inventaire
- `StatsPanel.vue` - Affichage des stats du joueur
- `EndingScreen.vue` - Écran de fin avec récapitulatif
- `Modal.vue` - Fenêtre modale (sauvegarde, options)

_Composants UI:_

- `ButtonPrimary.vue` - Bouton principal
- `LoadingSpinner.vue` - Indicateur de chargement
- `AudioController.vue` - Contrôle de la musique/sons

### 4.3 Routes (Vue Router)

| Route              | Composant                | Description                 | Params         |
| ------------------ | ------------------------ | --------------------------- | -------------- |
| `/`                | `HomeView.vue`           | Menu principal              | -              |
| `/nouvelle-partie` | `CharacterSetupView.vue` | Config initiale (nom, etc.) | -              |
| `/chapitre/:id`    | `ChapterView.vue`        | Vue d'un chapitre           | id du chapitre |
| `/fin/:endingId`   | `EndingView.vue`         | Écran de fin                | id de la fin   |
| `/sauvegardes`     | `SavesView.vue`          | Gestion des sauvegardes     | -              |
| `/credits`         | `CreditsView.vue`        | Crédits                     | -              |

### 4.4 Gestion de l'état (Pinia)

_Stores prévus:_

1. _`useStoryStore`_

   - State: `currentChapterId`, `visitedChapters`, `storyData`, `availableChoices`
   - Actions: `loadChapter()`, `makeChoice()`, `goToChapter()`
   - Getters: `currentChapter`, `isChapterUnlocked()`

2. _`usePlayerStore`_

   - State: `playerName`, `karma`, `stats`, `inventory`, `flags`, `relationships`
   - Actions: `addToInventory()`, `updateStat()`, `setFlag()`, `updateRelationship()`
   - Getters: `hasItem()`, `getRelationship()`, `canAccessEnding()`

3. _`useSaveStore`_

   - State: `saveSlots` (array de 3 slots)
   - Actions: `saveGame()`, `loadGame()`, `deleteSave()`, `getSaveInfo()`
   - Getters: `hasSaves`, `latestSave`

4. _`useAudioStore`_ (optionnel)
   - State: `currentMusic`, `soundEffects`, `volume`, `isMuted`
   - Actions: `playMusic()`, `playSound()`, `toggleMute()`, `setVolume()`

### 4.5 Persistance des données

_Méthode choisie:_

- [x] LocalStorage (obligatoire pour sauvegardes)
- [ ] Firebase Firestore (bonus optionnel pour galerie publique)

_Structure de données LocalStorage:_

```json
{
  "saveSlot1": {
    "savedAt": "2025-01-15T14:30:00Z",
    "playerName": "Alex",
    "currentChapterId": "chapter-5",
    "playerState": {
      "karma": 5,
      "stats": {
        "courage": 7,
        "intelligence": 8,
        "empathy": 6
      },
      "inventory": ["clé", "journal", "photo"],
      "flags": {
        "hasActivatedMachine": true,
        "knowsTheSecret": true,
        "savedMarcus": false
      },
      "relationships": {
        "marcus": 8,
        "chronos": -5
      }
    },
    "visitedChapters": ["ch-1", "ch-2", "ch-3a", "ch-4", "ch-5"],
    "choiceHistory": [
      { "chapterId": "ch-2", "choiceId": "activate", "timestamp": "..." },
      { "chapterId": "ch-3a", "choiceId": "go-past", "timestamp": "..." }
    ]
  },
  "saveSlot2": null,
  "saveSlot3": null,
  "settings": {
    "volume": 0.7,
    "textSpeed": "normal",
    "autoSave": true
  }
}
```

### 4.6 Structure de données de l'histoire

Comment stockez-vous les chapitres et choix?

_Option A: JSON statique_ (recommandé)

```javascript
// data/chapters.json
{
  "ch-1": {
    "id": "ch-1",
    "title": "Le Réveil",
    "text": "Vous vous réveillez dans votre laboratoire...",
    "backgroundImage": "/images/bg-lab.jpg",
    "music": "intro-theme.mp3",
    "choices": null,  // Chapitre linéaire
    "nextChapter": "ch-2"
  },
  "ch-2": {
    "id": "ch-2",
    "title": "La Découverte",
    "text": "Face à la machine, vous devez décider...",
    "backgroundImage": "/images/bg-machine.jpg",
    "music": "tension-theme.mp3",
    "choices": [
      {
        "id": "activate",
        "text": "Activer la machine",
        "consequence": "Vous entrez dans l'inconnu...",
        "nextChapter": "ch-3a",
        "effects": {
          "karma": -2,
          "stats": { "courage": +1 },
          "flags": { "hasActivatedMachine": true }
        }
      },
      {
        "id": "report",
        "text": "Rapporter la découverte",
        "consequence": "La prudence avant tout...",
        "nextChapter": "ch-3b",
        "effects": {
          "karma": +2,
          "stats": { "intelligence": +1 },
          "flags": { "hasReported": true }
        }
      }
    ]
  }
}
```

## 🎬 5. Fonctionnalités et User Stories

### 5.1 Fonctionnalités MVP (Minimum Viable Product)

_Obligatoires pour la livraison:_

- [ ] _F1 - Lecture de l'histoire_

  - Affichage du texte narratif chapitre par chapitre
  - Navigation linéaire dans l'intro
  - Transitions fluides entre chapitres

- [ ] _F2 - Système de choix_

  - Affichage de 2-4 choix par chapitre décisionnel
  - Sélection d'un choix
  - Redirection vers le chapitre suivant approprié
  - Minimum 8 chapitres avec au moins 3 fins

- [ ] _F3 - Tracking des conséquences_

  - État du joueur (karma/stats/flags)
  - Mise à jour après chaque choix
  - Conditions pour débloquer fins

- [ ] _F4 - Système de sauvegarde_

  - 3 slots de sauvegarde
  - Sauvegarde manuelle
  - Chargement d'une sauvegarde
  - Affichage des infos de sauvegarde (date, progression)

- [ ] _F5 - Historique des choix_

  - Garder trace des décisions prises
  - Affichage dans un menu (optionnel mais recommandé)

- [ ] _F6 - Écrans de fin_

  - Affichage de la fin atteinte
  - Récapitulatif des choix faits
  - Option de recommencer ou charger

- [ ] _F7 - Interface responsive_

  - Mobile (320px+)
  - Tablette (768px+)
  - Desktop (1024px+)

- [ ] _F8 - Animations de texte_

  - Apparition progressive du texte (optionnel: effet typewriter)
  - Transitions entre chapitres avec GSAP

- [ ] _F9 - Accessibilité_

  - Navigation au clavier
  - ARIA labels
  - Contraste WCAG AA
  - Option skip animations

- [ ] _F10 - Médias intégrés_
  - Images de fond par chapitre
  - Musique d'ambiance (avec contrôle volume)

### 5.2 Fonctionnalités bonus (optionnelles)

- [ ] _B1 - Auto-save_

  - Sauvegarde automatique à chaque chapitre
  - Indication visuelle de la sauvegarde

- [ ] _B2 - Inventaire visuel_

  - Affichage graphique des items
  - Description des objets au survol

- [ ] _B3 - Stats visuelles_

  - Barres de progression pour stats
  - Graphique radar des caractéristiques

- [ ] _B4 - Arbre de choix visualisé_

  - Carte interactive des chemins possibles
  - Indication des chapitres visités/non-visités

- [ ] _B5 - Galerie des fins_

  - Collection de toutes les fins débloquées
  - Pourcentage de complétion

- [ ] _B6 - Mode rejouabilité_

  - Fast-forward pour texte déjà lu
  - Skip to choice (sauter au prochain choix)

- [ ] _B7 - Effets sonores contextuels_

  - Sons lors de choix importants
  - Ambiances sonores par scène

- [ ] _B8 - Animations avancées GSAP_

  - Parallax sur les backgrounds
  - Animations de transition complexes

- [ ] _B9 - Firebase (équipes avancées)_
  - Partage de fins débloquées
  - Galerie publique d'histoires

### 5.3 User Stories

_Format:_ En tant que [rôle], je veux [action] afin de [bénéfice]

1. _US-01:_ En tant que lecteur, je veux lire une histoire interactive afin de vivre une expérience narrative immersive.

2. _US-02:_ En tant que joueur, je veux faire des choix qui ont des conséquences afin de sentir que mes décisions comptent.

3. _US-03:_ En tant qu'utilisateur, je veux sauvegarder ma progression afin de reprendre plus tard sans perdre mon avancement.

4. _US-04:_ En tant que lecteur, je veux voir l'impact de mes choix afin de comprendre comment ils influencent l'histoire.

5. _US-05:_ En tant que joueur, je veux atteindre différentes fins afin de découvrir toutes les possibilités de l'histoire.

6. _US-06:_ En tant qu'utilisateur mobile, je veux lire l'histoire sur mon téléphone afin d'en profiter partout.

7. _US-07:_ En tant que lecteur, je veux consulter l'historique de mes choix afin de me rappeler mes décisions passées.

8. _US-08:_ En tant que joueur, je veux collecter des objets/débloquer des stats afin de me sentir progresser dans l'aventure.

9. _US-09:_ En tant qu'utilisateur, je veux contrôler le volume sonore afin d'adapter l'expérience à mon environnement.

10. _US-10:_ En tant que joueur, je veux avoir un expériance intuitive. 

## 📊 6. Maquettes et Wireframes

### 6.1 Lien vers les maquettes Figma

_Lien:_ [https://www.figma.com/design/IcZWmfdjbvwPM7yiqXu4IU/maquette?node-id=8-270&p=f&t=pPWmqw3PZDpbjKDf-0]

### 6.2 Écrans principaux à maquetter

- [X] Menu principal (nouvelle partie, charger, options)
- [X] Écran de chapitre avec texte narratif
- [ ] Panel de choix (2-4 options)
- [X] Écran de fin avec récapitulatif
- [X] Gestion des sauvegardes (3 slots)
- [X] Version mobile d'au moins 2-3 écrans

### 6.3 Interactions clés à maquetter

- Transition entre chapitres
- États des boutons (hover, actif, disabled)

## 📊 7. Plan de Réalisation

### 7.1 Répartition des rôles

| Membre | Rôle principal                    | Responsabilités                                                 |
| ------ | --------------------------------- | --------------------------------------------------------------- |
| Patricia  | Chef de projet + Architecture Vue | Coordination, Vue Router, stores Pinia, structure de l'histoire |
| Jade  | Design + Animations               | CSS, design visuel, animations GSAP, transitions                |
| Patricia  | Contenu + Narration               | Écriture des chapitres, création de l'arbre narratif, dialogues |
| Félix  | Données + Système                 | Gestion des sauvegardes, LocalStorage, logique de choix, stats  |

_Note:_ Tous participent au développement, mais chacun a sa spécialité.

### 7.2 Tâches transversales

_À répartir entre tous:_

- Tests de l'histoire (lecture complète) Patricia
- Correction de fautes et relecture: Jade
- Tests et debugging: Félix
- Documentation du code: Jade
- Présentation finale: Patricia

### 7.3 Outils de collaboration

- _Git/GitHub:_ [https://github.com/Jadoooooou/webapp-creative-hebert-nassif-lavoie/edit/main/cahier_charges_chemin.md]
- _Gestion de projet:_ [Trello]
- _Communication:_ [Teams]
- _Design:_ [Figma]
- _Documentation:_ [README.md]
- _Écriture collaborative:_ [Teams]

## 🚀 8. Critères de Succès

### 8.1 Critères techniques

- [ ] Application Vue.js fonctionnelle sans erreurs console
- [ ] Minimum 8 composants Vue bien structurés
- [ ] Vue Router avec 5+ routes
- [ ] Pinia implémenté avec state management cohérent
- [ ] CSS organisé avec variables
- [ ] Animations GSAP fluides
- [ ] Système de sauvegarde fonctionnel
- [ ] Code validé (ESLint)
- [ ] Responsive sur 3 breakpoints
- [ ] Accessibilité WCAG AA

### 8.2 Critères narratifs

- [ ] Histoire cohérente du début à la fin
- [ ] Minimum 8 chapitres/scènes
- [ ] Au moins 3 fins différentes
- [ ] Choix ayant un impact réel sur l'histoire
- [ ] Aucune faute d'orthographe majeure
- [ ] Dialogues naturels et crédibles
- [ ] Rythme narratif bien dosé

### 8.3 Critères de qualité

- [ ] Interface intuitive et facile à utiliser
- [ ] Design cohérent et esthétique
- [ ] Lisibilité du texte (taille, contraste, police)
- [ ] Animations pertinentes (pas excessives)
- [ ] Temps de chargement < 2 secondes
- [ ] Aucun bug bloquant
- [ ] Musique/sons appropriés
- [ ] Documentation complète (README)

### 8.4 Critères créatifs

- [ ] Histoire originale et engageante
- [ ] Personnages mémorables
- [ ] Twist ou surprise dans l'intrigue
- [ ] Expérience émotionnelle impactante
- [ ] Rejouabilité (envie de tester d'autres chemins)

## 📅 9. Calendrier du projet: Planning prévisionnel

### 9.1 _PHASE 1: PLANIFICATION ET DESIGN_

<!--Semaine 1-2 (la 2 étant la semaine de rattrapage)-->

**Du 8 au 22 octobre**

_Remise 22 octobre | 15%_

- Rédaction du cahier de charges
- Écriture de l'arbre narratif complet
- Design: Création des maquettes Figma
- Définition de l'architecture technique
- Setup du projet (Vite + Vue + dépendances)

### 9.2 _PHASE 2: FONDATION_

<!--Semaine 3-4-->

**Du 22 octobre au 2 novembre environ**

_Remise Phases 2 FONDATION et 3 INTERACTIVITÉ : vendredi 14 novembre | 15%_

!!! tip "Le projet portfolio en parallèle"
Notez que mercredi le 29 octobre c'est la remise et présentation de votre portfolio donc nous laissons un peu plus qu'une semaine pour cette phase car vous allez probablement finaliser votre portfolio en même temps.

- Structure des composants de base
- Vue Router configuré
- Pinia stores créés
- Premiers chapitres (texte + affichage)

### 9.3 _PHASE 3: INTERACTIVITÉ - Système de Choix_

<!-- Semaine 4-5-->

**Environ du 2 novembre au 12 novembre**

_Remise Phases 2 FONDATION et 3 INTERACTIVITÉ : vendredi 14 novembre | 15%_

- Logique de branches narratives
- Système de tracking des conséquences
- Composants de choix interactifs
- Plus de chapitres écrits et intégrés

### 9.4 _PHASE 4: ANIMATIONS ET MÉDIAS_

<!-- Semaine 6 -->

**Du 12 au 19 novembre**

_Remise Phases 4 ANIMATIONS+MÉDIAS et 5 PERSISTANCE : 26 novembre | Formatif_

- Intégration GSAP (transitions)
- Images de fond par chapitre
- Musiques/sons d'ambiance
- Animations de texte

### 9.x _ÉVALUATION PAR LES PAIRS ET AUTO-ÉVALUATION DE MI PARCOURS_

**Sera fait en classe le 19 novembre**

_Remise de l'évaluation par les pairs et auto-évaluation de mi parcours: 19 novembre | 5%_

### 9.5 _PHASE 5: PERSISTANCE ET SAUVEGARDE DES DONNÉES + Fin de l'histoire_

<!-- Semaine 7 -->

**Du 19 au 26 novembre**

_Remise Phases 4 ANIMATIONS+MÉDIAS et 5 PERSISTANCE : 26 novembre | Formatif_

- Système de sauvegarde (3 slots)
- LocalStorage complet
- Toutes les fins écrites et intégrées
- Écrans de fin avec récapitulatif

### 9.6 _PHASE 6: AFFINAGE ET ACCESSIBLITÉ_ pour la version _BETA_

**Du 26 novembre au 3 décembre**

*Remise version *BETA* le 3 décembre | Formatif*

- Responsive final
- Accessibilité (ARIA, keyboard)

### 9.7 _PHASE 7: CONTRÔLE QUALITÉ ET CORRECTIONS_

<!-- Semaine 8 -->

**Du 3 au 8 décembre**

_Remise Phase 7 RAPPORT DU CONTRÔLE DE LA QUALITÉ : 8 décembre | 10%_

- Tests de toutes les branches de l'histoire
- Tests fonctionnels
- Tests multi-plateformes (navigateurs et appareils)
- Relecture et corrections
- Optimisation de la performance
- Gestion des bogues

### 9.8 _PHASE 8: FINALISATION_

<!-- Semaine 8 + 2 jours-->

**Du 3 au 10 décembre** (peut-être fait en parallèle avec la phase 7)

_Remise et présentation finale : 10 décembre | 50%_

- Documentation (README complet)
- Déploiement - Mise en ligne (GitHub/Netlify/Vercel)
- Vidéo de présentation
- Préparation de la démo en classe

### 9.9 _PHASE 9: POST-MORTEM_

**Du 10 au 12 décembre**

_Remise de l'analyse réflexive et suivi de l'évaluation de mi-parcours: 12 décembre | 5%_

## 🎯 10. Risques et Solutions

| Risque                                 | Probabilité | Impact | Solution préventive                                    |
| -------------------------------------- | ----------- | ------ | ------------------------------------------------------ |
| Scope creep narratif (trop d'histoire) | Élevée      | Élevé  | Limiter à 8-10 chapitres max, garder histoires simples |
| Manque de temps pour écrire            | Élevée      | Élevé  | Écrire les chapitres AVANT de coder, paralléliser      |
| Bugs dans la logique de branches       | Moyenne     | Élevé  | Tester chaque branche manuellement, diagramme clair    |
| Incohérences narratives                | Moyenne     | Moyen  | Relecture croisée, document de tracking des flags      |
| Fautes d'orthographe                   | Élevée      | Faible | Utiliser correcteur, relecture collective              |
| Sauvegardes corrompues                 | Faible      | Élevé  | Validation JSON, gestion d'erreurs, tests intensifs    |

## 📝 11. Annexes

### 11.1 Ressources et références

_Documentation officielle:_

- Contenu du cours Web 5 https://tim-montmorency.com/compendium/582-511-web5/
- Guide étudiant du projet appli web créative: https://tim-montmorency.com/compendium/582-511-web5/projets/appweb-creative/syllabus_guide_etudiant.html
- Vue.js: https://vuejs.org
- Pinia: https://pinia.vuejs.org
- GSAP: https://greensock.com/docs/

_Inspiration narrative:_

- Bandersnatch (Black Mirror)
- Life is Strange
- Detroit: Become Human
- Twine games

_Tutoriels utiles:_

- [Lien vers tuto 1]
- [Lien vers tuto 2]

### 11.2 Glossaire

- _Branche:_ Chemin narratif distinct selon les choix
- _Flag:_ Variable booléenne qui track un événement
- _Ending:_ Fin possible de l'histoire
- _Karma:_ Système de moralité basé sur les choix
- _Node:_ Point de décision dans l'arbre narratif
- _Save slot:_ Emplacement de sauvegarde

## ✅ Validation du Cahier de Charges

_Date de validation:_ [Date]

_Signatures:_

- Chef de projet: Patricia Nassif
- Responsable designs: Jade Hébert
- Données + Systèmes: Félix Lavoie

_Validation enseignant:_ **\*\***\_\_\_**\*\***  
_Date:_ **\*\***\_\_\_**\*\***  
_Commentaires:_

---

_Version du document cahier de charge:_ 1.0  
_Dernière mise à jour:_ [Écrire ici la date]
