# Documentation des composants et des views

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

## IconDoc

- composant de bouton de style icon 
- na
- na

## IconOrdi

- composant de bouton de style icon 
- na
- na
## IconPoubelle

- composant de bouton de style icon 
- na
- na

## NarrativeText

- affiche le texte narratif avec effets de style taperwriter
- na
- na

## FormUserProfile

- formulaire utilisé dans le Chapitre 2 pour collecter les données du joueur
- defaultValues [Object] — valeurs préremplies
- submit(formData) — renvoie toutes les données du formulaire

## stats 

- window qui affiche les stats de l'amitier selon les choix
- na
- na

## GrenouilleGlam

- mini jeu ou on doit placer un chapeux sur la grenouille
- na
- na

## FestinDeMouche

- mini jeu ou on doit clicker des mouches pour avoir un score
- na
- na

## Frog

- fait apparaitre une image dans le jeu
- na
- na

## Bluescreen

- animation qui fait un "bogue" ressemblant a un blue screen a la fin des mini jeux
- na
- na

## Terminal

- animation qui fait un "bogue" ressamblant a un terminal a l'ors du chapitre 12
- na
- na

## CreditsModal

- modal qui montre les credits du projets au click d'un bouton
- na
- na

## ChoicePanel

- affiche les boutons néssésaire a la navigation du projet
- na
- na