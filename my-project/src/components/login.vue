
<template>

<el-container style="height:100%;" direction="vertrcal">
<el-main>

      <img class="logo"  src="../assets/elex.png"/>
        <div class="login">
            <div>
            <img  class="name" src="../assets/name.png"/>
            <el-input class="kuang1" size="large" v-model="input1" style="width:270px" ></el-input>
             </div>

            <div>

            <img  class="password" src="../assets/password.png"/>
            <el-input class="kuang2" size="large" v-model="input2" style="width:270px" ></el-input>
            </div>
            <br/>
        <div class="sb">
            <el-button  class="loginbutton" style="width:130px" >&nbsp;&nbsp;&nbsp;&nbsp;登录&nbsp;&nbsp;&nbsp;</el-button>
            &nbsp;&nbsp;&nbsp;
            <el-button type="info" style="width:130px">&nbsp;&nbsp;&nbsp;&nbsp;退出&nbsp;&nbsp;&nbsp;</el-button>
         </div>

        </div>
</el-main>
</el-container>

</template>

<style  scoped>


/*.el-main{*/
    /*background-color: rgb(26,26,26);*/
/*}*/
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
.sb{
    position: relative;
    left:20px;
}



</style>
<script>
export default {
    data() {
    return {
      input1: '',
      input2: ''
    }
  }

}
</script>
>

