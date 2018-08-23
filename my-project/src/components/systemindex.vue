<template>
<div class="biggest" style="overflow:-Scroll;overflow-x:hidden;overflow-y:hidden">
    <div class="page">
        <img class="logo"  src="../assets/elex.png"/>
    </div>
    <div class="login">
        <div class="first">
            <img  class="name" src="../assets/name.png"/>   
            <el-input class="kuang1" size="large" v-model="input" style="width:270px" ></el-input>
        </div>

        <div class="second">
            <img  class="password" src="../assets/password.png"/>  
            <el-input class="kuang2" v-model="input" style="width:270px" ></el-input>
        </div>

        <div class="ss">&nbsp;&nbsp;&nbsp;&nbsp;
            <el-button type="danger" style="width:130px" >&nbsp;&nbsp;&nbsp;&nbsp;登录&nbsp;&nbsp;&nbsp;</el-button>          
            <el-button type="info" style="width:130px">&nbsp;&nbsp;&nbsp;&nbsp;退出&nbsp;&nbsp;&nbsp;</el-button>
        </div>        

    </div>

</div>
    
</template>


<style>

.biggest{
    width:100%;
    height:800px;
    background:rgb(26,26,26);
}
.page{
    position: relative;
    top:120px;
}
.login{
    position: relative;
    left:1300px;
    top:150px;
}
.name{
    position: relative;
    top:18px;
}
.password{
    position: relative;
    top:20px;
    right:8px;
}
.kuang1{
    position: relative;
    left:5px;

}
.ss{
    position: relative;
    top:15px;
    left:30px;
}


</style>

<script>
export default {
    
}
</script>

