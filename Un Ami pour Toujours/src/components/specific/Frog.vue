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

<style src="../../assets/styles/frog.css"></style>

