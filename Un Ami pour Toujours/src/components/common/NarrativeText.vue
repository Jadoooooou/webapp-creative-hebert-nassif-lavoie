<template>
    <div class="page">
        <div class="container">
            <!-- Texte animé -->
            <p class="narrative-text">{{ formattedText }}</p>
            <Stats v-if="chapter.id == 6" class="stats"/>
            <Stats v-if="chapter.id == 7" class="stats"/>
            <Stats v-if="chapter.id == 8" class="stats"/>
            <div v-if="chapter.id == 3" class="jeuImg">
                <img src="/src/assets/grenouille_glam.png" alt="grenouille_glam">
                <img src="/src/assets/festin_mouches.png" alt="festin_mouches">
            </div>
        </div>
    </div>
</template>

<script>
import { computed, watch, nextTick, onMounted } from 'vue';
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { usePlayerStore } from "/src/stores/player";
import Stats from '../specific/Stats.vue';

gsap.registerPlugin(TextPlugin);

export default {
    name: "NarrativeText",

    props: {
        chapter: { type: Object, required: true }
    },
    components: {
    Stats
    },
    setup(props) {
        const playerStore = usePlayerStore();

        const formattedText = computed(() => {
            return props.chapter.text.replace('[NOM]', playerStore.form.name || '…');
        });

        // 🔥 Fonction qui anime le texte
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

        // 🔥 1) Anime au premier rendu
        onMounted(() => {
            animateText();
        });

        // 🔥 2) Réanime quand le chapitre change (nouvel ID)
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
    color: #384C3F;
    text-align: center;
    margin: 0;
    padding: 0vw 5vw 10vh 5vw;
}

p {
    font-family: 'Press Start 2P';
    font-size: 2cap;
    color: #384C3F;
    text-align: left;
    margin: 0;
}

.stats {
    margin: 0 auto;
    margin-top: 50px;
}

.jeuImg img {
    width: 30vh;
}

.jeuImg {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 50vh;
}

/* TABLET */
@media (min-width: 768px) {
  
}

/* MOBILE (écrans ≤ 767px) */
@media (max-width: 1300px) {
    .jeuImg img {
    width: 14vh;
}

    .jeuImg {
    display: flex;
    justify-content: space-between;
    height: 40vh;
}

p {
    font-family: 'Press Start 2P';
    font-size: 1.5cap;
}
}


</style>
