<template> 
    <div class="page">
        <div class="container">
           <FormUserProfile v-if="chapter.id == 2" class="form"/> 
            <button

                v-for='choice in chapter.choices'
                :key='choice.id'
                @click="$emit('choose', choice.nextChapter)"
                
            >
                {{ choice.text }}
            </button>
        </div>
    </div>
</template>

<script>
    import FormUserProfile from '../specific/FormUserProfile.vue';
    export default {
        name: "BaseButton",
        components: {
            FormUserProfile
        },
        props: {
          chapter: { type: Array }
        }
    }
</script>

<style scoped>
    .page {
        height: 30vh;
    }

    .form {
        margin-top: -40vh;
    }

    .container {
        padding-left: 20vw;
        padding-right: 20vw;
        display: flex;
        justify-content: space-between;
    }

    button {
        background-color: #c0c0c0;
        border: 2px solid #fff; 
        border-right-color: #808080; 
        border-bottom-color: #808080; 
        padding: 4px 12px;
        font-size: 14px;
        color: black;
        cursor: pointer;
        outline: none;
        width: 250px;
        height: 40px;
    }

    button:hover {
        border: 2px solid #808080; 
        border-right-color: #fff; 
        border-bottom-color: #fff; 
        background-color: #c0c0c0;
    }
</style>