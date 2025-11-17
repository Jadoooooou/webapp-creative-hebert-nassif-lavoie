<template> 
    <div class="page">
        <div class="container">
            <h1>test</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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