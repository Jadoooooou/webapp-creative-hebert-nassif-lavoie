# Documentation des composants et des views

## LoadingSpinner

- affiche une animation de chargement pendant un traitement suite à un choix
-
- NA (composant purement visuel)

## AppFooter

- sert de pied de page affiche des informations ou boutons (inspiré de la barre du bas de Windows)
- links [Array] — liste de liens ou d’actions à afficher et version [String] — numéro ou texte de version du projet
- navigate [link] — émis quand un lien du pied de page est cliqué
- prop: choix du Chapter2

## HomeView

- écran d'accueil du jeu ; présente le titre, le bouton Commencer, les sauvegrades...
- title [String] — titre principal du jeu
- start-game — émis lorsque le joueur clique sur Commencer

## Chapter1

- première scène (présentation du personnage)
-
- next-chapter — passe au chapitre suivant

## Chapter2

- deuxième scène interactive (formulaire de connaissance), sert à personnaliser la suite de l’histoire en fonction des réponses données
- defaultValues [Object] — valeurs par défaut du formulaire
- form-submitted(data) — émis lorsque le joueur valide le formulaire, avec les données saisies (ex. { name, age, preference }), input-change(field, value) — émis à chaque modification d’un champ, story-1 et story-2 — passe au chapitre suivant selon le choix

## Chapter3

- héberge un mini-jeu interactif (ex. Festin de mouches ou Grenouille Glam), le joueur peut interagir librement jusqu’à décider de quitter le petit jeu
- gameType [String] — nom ou type du mini-jeu à charger (ex. "festin-de-mouches" ou "grenouille-glam"), playerData [Object] — informations du joueur (issues du chapitre 2, ex. nom, préférences)
- score-updated(value) — émis pendant la partie pour informer du score courant, exit-game() — émis lorsque le joueur clique sur le X pour quitter le mini-jeu, next-chapter() — envoyé automatiquement après exit-game pour poursuivre l’histoire
- prop: choix du Chapter2

## Chapter4

- quatrième scène narrative (histoire), sert à développer l’histoire et à immerger le joueur avant un choix important final qui influencera la suite
- storyData [Objec] — contient les textes ou médias à afficher dans la scène, previousFormData [Object] — données issues du chapitre 2 pour personnaliser la narration
- choice-1 et choice-2 — passe au chapitre suivant selon le choix
- prop: choix du Chapter3

## Chapter5

- cinquième scène non interactive (hypnose)
- autoPlay [Boolean] — démarre automatiquement l’animation à l’arrivée sur la scène, loop [Boolean] — indique si l’animation tourne en boucle tant que le joueur ne quitte pas, playerData [Object] — infos du joueur pour personnaliser certains messages
- animation-started() — émis lorsque la séquence débute, show-ending() — redirige vers l’écran de fin (EndingScreen) après la sortie
- prop: choix du Chapter4

## EndingScreen

- écran de fin de jeu selon les choix du joueur
- endingType [String] — type de fin ("branche D", "branche E", "branche F")
- restart — recommence le jeu depuis le début, return-home — renvoie à l’écran d’accueil
- prop: choix du Chapter5

## App
