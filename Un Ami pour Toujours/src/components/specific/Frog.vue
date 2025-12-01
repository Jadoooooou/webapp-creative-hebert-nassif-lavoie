<template>
    <img class="frog" src="/src/assets/frog.png" :style="{ top: position.top + 'vh', left: position.left + 'vw' }" />
</template>

<script>
export default {
    name: "Frog",
    props: {
        position: {
            type: Object,
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
