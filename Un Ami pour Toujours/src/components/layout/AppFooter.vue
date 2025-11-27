<template>
    <div class="bar">
        <button @click="clickBtn" class="btn">Restart</button>
        <div class="creds">
            <CreditsModal />
        </div>
    </div>
</template>

<script>
import CreditsModal from '../common/CreditsModal.vue'

export default {
    name: 'AppFooter',
    components: {
        CreditsModal
    },
    methods: {
        clickBtn() {
            this.$router.push('/')
        }
    }
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
    display: flex;
    align-items: center;
    padding-left: 20px;
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.btn {
    background-color: #c0c0c0;
    border: 2px solid #fff;
    border-right-color: #808080;
    border-bottom-color: #808080;
    padding: 4px 12px;
    font-size: 14px;
    color: black;
    cursor: pointer;
    outline: none;
    width: 200px;
    height: 40px;
}

.btn:hover {
    border: 2px solid #808080;
    border-right-color: #fff;
    border-bottom-color: #fff;
    background-color: #c0c0c0;
}
</style>