<template> 
    <div class="bar">
        <button @click="clickBtn" class="btn">Restart</button>
    </div>
</template>

<script setup>
    const clickBtn = () => {
        alert('ribbit ribbit')
    }
</script>

<style scoped>
    .bar {
        background-color: #C1CEBE;
        height: 60px;
        position: fixed;   
        bottom: 0;          
        left: 0;
        width: 100%;
    }

    .btn {
        background-color: #c0c0c0;
        border: 2px solid #fff; /* Top & left light border */
        border-right-color: #808080; /* Right dark border */
        border-bottom-color: #808080; /* Bottom dark border */
        padding: 4px 12px;
        font-size: 14px;
        color: black;
        cursor: pointer;
        outline: none;
        width: 200px;
        height: 40px;
        margin-top: 10px;
        margin-left: 20px;
    }

    .btn:hover {
        border: 2px solid #808080; /* Top & left dark border */
        border-right-color: #fff;  /* Right light border */
        border-bottom-color: #fff; /* Bottom light border */
        background-color: #c0c0c0;
    }
</style>