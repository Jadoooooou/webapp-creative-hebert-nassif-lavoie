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
        name: "BaseButton",
        props: {
          chapter: { type: Array }
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
        text-align: center;
        font-size: 80px;
        margin-bottom: 50px;
    }

    p {
        font-size: 30px;
    }
</style>