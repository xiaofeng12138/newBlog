<template>
    <div>
        <Carousel />
        <ArtcleList />
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
    </div>
</template>
<script>
import Carousel from './components/carousel'
import ArtcleList from './components/articleList'
export default {
    components:{Carousel,ArtcleList},
    data() {
        return {
            
        }
    },
    
    
}
</script>
<style lang="scss" scope>
.el-pagination{
    text-align: center;
}

</style>

