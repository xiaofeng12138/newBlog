<template>
    <div class="main">
         <router-view />
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.main{
    position: fixed;
    left: 250px;
    top: 60px;
    right: 0;
    bottom: 0;
    border: 30px solid #f7f7f7;
    border-bottom: none;
    box-sizing: border;
}
</style>

