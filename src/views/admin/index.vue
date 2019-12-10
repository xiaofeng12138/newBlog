<template>
    <div>
        <Header/>
        <Main/>
        <Nav/>
    </div>
</template>
<script>
import Header from './components/header'
import Main from './components/main'
import Nav from './components/nav'
export default {
    components:{Header,Main,Nav},
    data() {
        return {
             backgroundImage: "url(" + require("@/public/32.jpg") + ")",
        }
    },



     mounted() {
        this.setBodyBackGround()
    },
    methods: { 
         setBodyBackGround () {
            document.body.style.backgroundSize = '100%'
            document.body.style.backgroundImage = this.backgroundImage
            //document.body.style.opacity = 0.5
      },
    },
    
}
</script>
