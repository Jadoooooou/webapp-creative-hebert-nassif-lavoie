<template>
    <img class="frog" src="/src/assets/frog.png" :class="'frog-chapter-' + chapterId"/>
</template>

<script>
export default {
    name: "Frog",
    props: {
        chapterId: {
            type: Number,
            required: true
        }
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
