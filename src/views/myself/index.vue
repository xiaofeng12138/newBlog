<template>
    <div class="myself">
      <div class="header">
         <img src="./img/test.png" alt="">
         <span>Web前端</span><span>少男心</span><span>逗比生活</span><span>浪荡不羁</span><span>初音未来</span>
      </div>
      <div class="desc">
        <span>个人简介：</span>
        <div class="wrap">
             <li><p>姓名：</p>晓风</li>
            <li><p>性别：</p>小哥哥一枚</li>
            <li><p>座右铭：</p>付出不亚于任何人的努力，谦虚戒骄</li>
            <li><p>个人简介：</p>一个积极乐观的人，虽然失败了很多次，但是我都没有放弃，既让选择了远方，便只顾风雨兼程</li>
            <p>关于前端：我是在2017年4月份的时候第一次接触到前端的，因为我在大学里面学的是计算机，所以实习的
                话我选择来到了上海,当时自己的工作岗位是运维；但是说句实话，自己本身对于运维也不是懂得很多，只是学
                校里 面学过一点点。因为自己是个实习生所以基本上每天都是很闲的，根本就没事做，整天就是在公司里面
                耗时间；考虑到自己是实习阶段，就也没有出去找别的工作了。刚好公司里面有作前端的， 就误打误撞知道了
                前端这门技术，自己随后也在网上找了很多关于前端的东西，也就慢慢的开始了自己的前端学习之路。。。</p>
        </div>
        <span>技术栈介绍：</span>
          <div class="wrap" style="margin-bottom:40px">
              <li>1、精通HTML5、CSS3、等Web前端布局技术，能熟练完成各种前端页面的书写，能实现各种动态效果展示</li>
              <li>2、精通原生js的核心语法，BOM、DOM、的操作，熟悉Ajax、Promise的操作原理和ES6的新语法</li>
              <li>3、熟悉HTTP的通讯协议、Linux系统操作和服务器Apache环境配置搭建</li>
              <li>4、精通Vue框架，熟悉底层源码，使用Vue来开发PC端项目和移动端WebApp，熟练使用Vue的UI框架</li>
              <li>5、熟悉React框架，能熟练使用JSX语法和react脚手架来搭建并开发React项目</li>
              <li>6、熟练使用Echarts来开发数据可视化、对Flutter、Uni-app等移动款框架都熟悉</li>
              <li>7、熟悉使用Node后台开发和mongodb数据库的操作，熟练使用Koa2或express框架搭建一个完整Node后台</li>
              <li>8、熟悉微信小程序开发，能够独立开发微信小程序</li>
              <li>9、熟练使用Webpack来构建项目，并配置webpack和打包</li>
              <li>10、熟练使用Vue3.0版本新特性。。。</li>
        </div>
        <span>项目地址：</span>
          <div class="wrap wrapbox">
              <li> <a href="https://github.com/xiaofeng12138" target="_Blank" >1、githup地址</a></li>
              <li> <a href="http://www.xiaofenggege.com:6023" target="_Blank" >2、webSocket通讯聊天室</a></li>
              <li> <a href="http://www.xiaofenggege.com/metro" target="_Blank" >3、使用React仿写Metro大都会</a></li>
              <li> <a href="http://www.xiaofenggege.com:6020" target="_Blank" >4、Node简易博客</a></li>
              <li> <a href="http://www.xiaofenggege.com" target="_Blank" >5、案例库特效</a></li>
        </div>
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.myself{
  width: 100%;
  margin-top: 20px;
  background-color: #D3EBED;
  opacity: 0.8;
  overflow: hidden;
  .header{
    height: 180px;
    padding-top: 30px;
    text-align: center;
    img{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin:  auto;
      margin-bottom: 20px;
      cursor: pointer;
      transition: all 1s ease-in-out; 
    }
    img:hover{
     transform:rotate(360deg) scale(1.3);
    }
    span{
      display: inline-block;
      width: 100px;
      height: 30px;
      margin-left: 20px;
      text-align: center;
      font-size: 20px;
      line-height: 30px;
      color: #000;
      cursor: pointer;
    }
  }
  .desc{
    span{
      display: inline-block;
      height: 30px;
      width: 100%;
      line-height: 30px;
      text-indent: 20px;
      font-size: 16px;
      background-color: pink;
      border-left: 4px solid #f00;
    }
    .wrap{
      width: 95%;
      height: 280px;
      margin: 15px auto;
        li{
          height: 30px;
          line-height: 30px;
          font-size: 16px;
          display: flex;
          p{
            font-weight: bold;
          }
        }
        p{
          line-height: 30px;
        }
    }
    .wrapbox{
      height: 200px;
      li{
        
        transform: all 1s;
        a{
          color: #000;
          line-height: 30px;
        }
      }
      li:hover{
        background-color: skyblue;
        transition:1s;
      }
    }
    
  }
}
</style>

