<template >

<div class="background" >

      <img class="logo"  src="../assets/elex.png"/>
        <div class="login">
            <div>
            <img  class="name" src="../assets/name.png"/>   
            <el-input class="kuang1" size="large" v-model="input" style="width:270px" ></el-input>
             </div>
          
            <div>
        
            <img  class="password" src="../assets/password.png"/>  
            <el-input class="kuang2" v-model="input" style="width:270px" ></el-input>
            </div>
            <br/>
        <div class="ss">&nbsp;&nbsp;&nbsp;&nbsp;
            <el-button type="danger" style="width:130px" >&nbsp;&nbsp;&nbsp;&nbsp;登录&nbsp;&nbsp;&nbsp;</el-button>
           
            <el-button type="info" style="width:130px">&nbsp;&nbsp;&nbsp;&nbsp;退出&nbsp;&nbsp;&nbsp;</el-button>
         </div>        

        </div>
</div>

</template>
<style scoped>

html{
    width:100%;
    height:100%;
    background:rgb(26,26,26);
}
.background{
    background-color: rgb(26,26,26);
 
   margin-left: 20px;
   margin-right: 20px;
   height:100%;
   
}
.logo{
    margin-top: 50px;
}
.login{
    float:right;
    margin-top: 400px;
     position: relative;
    right:100px;
    /*margin-left: 1250px;*/

}
.name{
   position: relative;
   top:20px;
  


}
.password{
    position: relative;
    top:24px;
  

}
.kuang2{
    position: relative;
    right:6px;
}
.ss{
    position: relative;
    left:20px;
}




</style>
<script>
export default {
    data() {
    return {
      
    input:''
     
    }
  }

}
</script>