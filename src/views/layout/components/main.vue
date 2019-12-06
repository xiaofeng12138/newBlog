<template>
<div class="boxWrap">
     <div class="box">
          <router-view />
        </div>
     <div class="r"></div>
     </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scope>
.boxWrap{
    display: flex;
    width: 60%;
    margin: auto;
    // height: 500px;
    margin-top:20px;
    justify-content: space-between;
.box{
    width: 72%;
    // background-color: #ccc;
}
 .r{
    width: 25%;
    border:2px solid rgb(255, 0, 234)
    }
}
</style>

