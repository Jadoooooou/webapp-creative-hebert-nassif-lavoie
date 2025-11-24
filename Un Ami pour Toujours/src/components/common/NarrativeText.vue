<template>
    <div class="page">
        <div class="container">
            <!-- Texte avec le nom remplacé -->
            <p class="narrative-text">{{ formattedText }}</p>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { usePlayerStore } from "/src/stores/player"; // <<< TON IMPORT EXACT

export default {
    name: "NarrativeText",

    props: {
        chapter: { type: Object, required: true }
    },

    setup(props) {
        const playerStore = usePlayerStore();

        const formattedText = computed(() => {
            return props.chapter.text.replace('[NOM]', playerStore.form.name || '…');
        });

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
</style>
