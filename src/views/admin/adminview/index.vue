<template>
    <div>
        这是一个后台管理系统的首页
    </div>
</template>

<script>
import {getCookie,getUsername,removeCookie,removeUsername,getRole} from '@/utils/cookie';
export default {
    data() {
        return {
            
        }
    },

    mounted() {
        if(!getCookie()){
           this.$router.push('/index')
        }
    },
    
}
</script>

<style lang="scss" scoped>

</style>

