<template>
    <img class="frog" src="/src/assets/frog.png" :style="{
        top: position.top + 'px',
        left: position.left + 'px'
    }" />
</template>

<script>
export default {
    name: "Frog",

    data() {
        return {
            position: {
                top: 0,
                left: 0
            }
        };
    },

    methods: {
        randomizePosition() {
            const maxWidth = window.innerWidth - 200; // largeur 
            const maxHeight = window.innerHeight - 200; // hauteur 

            this.position.top = Math.floor(Math.random() * maxHeight);
            this.position.left = Math.floor(Math.random() * maxWidth);
        }
    },

    mounted() {
        this.randomizePosition();
    }
};
</script>

<style scoped>
.frog {
    position: absolute;
    width: 180px;
    z-index: 15;
    pointer-events: none;
}
</style>
