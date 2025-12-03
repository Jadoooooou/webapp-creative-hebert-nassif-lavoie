# Documentation des composants et des views

## LoadingSpinner

- affiche une animation de chargement pendant un traitement suite à un choix
- NA (composant purement visuel)
- NA (composant purement visuel)

## AppFooter

- sert de pied de page affiche des informations ou boutons (inspiré de la barre du bas de Windows)
- links [Array] — liste de liens ou d’actions à afficher et version [String] — numéro ou texte de version du projet
- navigate [link] — émis quand un lien du pied de page est cliqué

## HomeView

- écran d'accueil du jeu ; présente le titre, le bouton Commencer, notre nom d'équipe,les sauvegrades...
- title [String] — titre principal du jeu
- start-game — émis lorsque le joueur clique sur Commencer

## ChapterView

- écran principal du jeu ; fond ressemblant à un bureau d'un vieux ordinateur, les différents chapitres (texte ou fenêtre) s'affichent par-dessus
- playerData [Object] — données du joueur pour personnaliser les scènes
- click (chapterId) - émis lorsque l’utilisateur presse le bouton d'un quelconque choix

## EndingScreenView

- écran de fin de jeu selon les choix du joueur
- endingType [String] — type de fin ("branche D", "branche E", "branche F")
- restart — recommence le jeu depuis le début, return-home — renvoie à l’écran d’accueil

## BaseButton

- composant de bouton réutilisable pour toute l’interface
- label [String] — nom du bouton, disabled [Boolean] — indique si le bouton est cliquable ou non
- click - émis lorsque l’utilisateur presse le bouton

## CreditsModal

- affiche une fenêtre modale avec les crédits du jeu appelée depuis le footer
- NA
- close — fermeture de la modale

## IconButton

- composant de bouton de style icon 
- NA
- click - émis lorsque l’utilisateur presse le bouton

## NarrativeText

- affiche du texte narratif avec effets de style taperwriter
- autoPlay [Boolean] — lance l'animation automatiquement
- NA

## SaveStoreManager

- A FAIRE
- A FAIRE
- A FAIRE

## FormUserProfile

- formulaire utilisé dans le Chapitre 2 pour collecter les données du joueur
- defaultValues [Object] — valeurs préremplies
- submit(formData) — renvoie toutes les données du formulaire

## Modale

- composant générique de fenêtre modale, réutilisable dans tout le projet
- visible [Boolean] — ouverture/fermeture de la modale, closable [Boolean] — affiche ou non le bouton X
- close() — fermeture de la modale