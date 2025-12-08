<template>
    <div class="page">
        <div class="container">
            <!-- affiche les texte du Json -->
            <p class="narrative-text">{{ formattedText }}</p>
            <!-- affiche les stats selon la bonne fin -->
            <Stats v-if="chapter.id == 14" class="stats" />
            <Stats v-if="chapter.id == 15" class="stats" />
            <Stats v-if="chapter.id == 16" class="stats" />
            <!-- affiche les images de jeux dans le bon chapitre -->
            <div v-if="chapter.id == 5" class="jeuImg">
                <img src="/src/assets/festin_mouches.png" alt="grenouille_glam">
                <img src="/src/assets/grenouille_glam.png" alt="festin_mouches">
            </div>
            <!-- affiche le bon jeu dans le bon chapitre -->
            <FestinDeMouche v-if="chapter.id == 6" class="jeux" />
            <GrenouilleGlam v-if="chapter.id == 7" class="jeux" />
        </div>
    </div>
</template>

<script>
import { computed, watch, nextTick, onMounted } from 'vue';
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { usePlayerStore } from "/src/stores/player";
import Stats from '../specific/Stats.vue';
import FestinDeMouche from "../specific/FestinDeMouche.vue";
import GrenouilleGlam from "../specific/GrenouilleGlam.vue";

gsap.registerPlugin(TextPlugin);

export default {
    name: "NarrativeText",

    props: {
        chapter: { type: Object, required: true }
    },
    components: {
        Stats,
        FestinDeMouche,
        GrenouilleGlam
    },
    setup(props) {
        const playerStore = usePlayerStore();
        // change le nom du IconDoc
        const formattedText = computed(() => {
            return props.chapter.text.replace('[NOM]', playerStore.form.name || '…');
        });

        // Fonction qui anime le texte
        const animateText = async () => {
            await nextTick();

            const paragraph = document.querySelector(".narrative-text");
            if (!paragraph) return;

            const fullText = paragraph.textContent;
            paragraph.textContent = "";

            gsap.to(paragraph, {
                duration: fullText.length * 0.03,
                text: fullText,
                ease: "none",
            });
        };

        // Anime au premier rendu
        onMounted(() => {
            animateText();
        });

        // Réanime quand le chapitre change (nouvel ID)
        watch(
            () => props.chapter.id,
            () => animateText()
        );

        return { formattedText };
    }
}
</script>

<style scoped>
* {
    margin: 0;
    box-sizing: border-box;
}

.page {
    height: 70vh;
}

.container {
    padding-left: 20vw;
    padding-right: 20vw;
    padding-top: 10vh;
    padding-bottom: 10vh;
}

h1 {
    font-family: 'Press Start 2P';
    font-size: 4vw;
    color: #000000;
    text-align: center;
    margin: 0;
    padding: 0vw 5vw 10vh 5vw;
}

p {
    font-family: 'Press Start 2P';
    font-size: 2vh;
    color: #000000;
    text-align: center;
    margin: 0;
}

.stats {
    margin: 0 auto;
    margin-top: 50px;
}

/* Conteneur des images de jeu */
.jeuImg {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2vh;
    height: 50vh;
    transition: height 0.5s ease;
}

/* Images avec transition de taille */
.jeuImg img {
    width: 50vh;
    /* Desktop par défaut */
    transition: width 0.5s ease, height 0.5s ease;
}

.jeux {
    margin: 0 auto;
}

/* TABLETTE / écran moyen */
@media (max-width: 1300px) and (min-width: 768px) {
    .jeuImg {
        height: 45vh;
    }

    .jeuImg img {
        width: 25vh;
    }
}

/* MOBILE */
@media (max-width: 767px) {
    .jeuImg img {
        width: 50vw;
        justify-content: center;
        align-items: center;
    }

    .jeuImg {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;
        gap: 2vh;
        padding-top: 100px;
    }

    p {
        font-size: 1.5vh;
    }

    .container {
        padding-left: 30vw;
        padding-right: 30vw;
        padding-top: 4vh;
        padding-bottom: 10vh;
    }
}
</style>
