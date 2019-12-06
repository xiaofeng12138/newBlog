<template>
    <div class="note" :style ="note">
        <Header/>
        <Main/>
        <Footer/>
    </div>
</template>


<script>
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

export default {

    components:{
         Header,Main,Footer
        },

    data() {
        return {
                backgroundImage: "url(" + require("@/public/3.png") + ")",
        }
    },
    mounted() {
        this.setBodyBackGround()
    },
    methods: {
         setBodyBackGround () {
            document.body.style.backgroundSize = '100%'
            document.body.style.backgroundImage = this.backgroundImage
      },
    },
    
}
</script>
<style lang="scss" scope>

</style>

