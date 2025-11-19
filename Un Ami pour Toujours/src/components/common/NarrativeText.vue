<template>
    <div class="page">
        <div class="container">
            <h1>{{ chapter.title }}</h1>
            <p>{{ chapter.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "NarrativeText",
    props: {
        chapter: { type: Object }
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