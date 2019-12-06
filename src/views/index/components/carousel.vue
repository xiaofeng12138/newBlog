<template>
   <div>
	<el-carousel indicator-position="outside" height="300px">
    <el-carousel-item :interval = '6000' v-for="(item,index) in imgList" :key="index">
        <!-- <img src= "../../../public/banner/1.png"   alt=""> -->
        <img :src=  item.src    alt="" >
    </el-carousel-item>
  </el-carousel>
   
  </div>
  
	
</template>

<script>
export default {
    data() {
        return {
            imgList:[
                {
                    src:require('../../../public/banner/1.png')
                },
                {
                    src:require('../../../public/banner/2.png')
                },
                {
                    src:require('../../../public/banner/3.png')
                },
                {
                    src:require('../../../public/banner/4.png')
                },
                {
                    src:require('../../../public/banner/5.png')
                }
            ]
            
        }
    },

    mounted() {
        this.fn()
    },
    methods: {
      
    },
}
</script>
<style lang="scss" scoped>

.el-carousel{
   border-radius: 10px;
}

.el-carousel__item  img{
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel-item {
    img{
        width: 100% !important;
    }
  }
</style>


