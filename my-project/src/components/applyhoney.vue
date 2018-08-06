<template>

<el-container style="height:100%;" direction="vertrcal">
    <!-- header -->
      <!-- main -->
  <el-main class="el-main-2" > 
      <div class="header-2">
              <p class="p-2"> <i class="el-icon-menu"></i>应用蜜罐
              </p><br/>
              <hr style="margin-bottom:0;"/>
              <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="应用蜜罐信息" name="first"></el-tab-pane>
    
  </el-tabs>

          </div>
      <div class="ip-select">
        <p class="ip">IP地址：&nbsp;
        <el-input v-model="input" placeholder="请输入IP地址查询" style="width:300px">
        </el-input>
        &nbsp;
        <el-button type="danger">查询主机</el-button>
      </p>
      </div>


      <div >
      <el-table
      :header-cell-style="{background:'#EE6363',padding:0,color:'#FFFFFF'}"
                                class="table1"
                                row-style="30px"
                                cell-style="padding:0"
                                id="table11"
                                :data="temdata"
                                style="width: 100%">
      <el-table-column
        prop="number"
        label="序号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="IP"
        label="IP地址"
        width="350">
      </el-table-column>
      <el-table-column
        prop="type"
        label="主机类型"
        width="220">
      </el-table-column>
      <el-table-column
        prop="pan"
        label="硬盘"
        width="200">
      </el-table-column>
      <el-table-column
        prop="CPU"
        label="CPU"
        width="220">
      </el-table-column>
      <el-table-column
        prop="load"
        label="内存"
        width="220">
      </el-table-column>
      <el-table-column
        prop="operater"
        label="操作"
        width="220">
      </el-table-column>

      

    </el-table>
  </div>
  <div class="page">
    <p class="bbs">显示第1到第16条记录，总共16条记录&nbsp;&nbsp;&nbsp;&nbsp;每页显示
     <el-select v-model="value" placeholder="10" style="width:100px">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>&nbsp;条记录&nbsp;&nbsp;转到&nbsp;
  <el-input v-model="input" placeholder="10"style="width:50px"></el-input>
  &nbsp;页&nbsp;<el-button type="danger">跳转</el-button>
  <p class="abs">
  <el-button >上一页</el-button>
  <el-button type="danger" style="width:20px" >1</el-button>
  <el-button style="width:20px" >2</el-button>
  <el-button>下一页</el-button >
  </p>




</p>
  </div>

   </el-main>
</el-container>

</template>
<style scoped>



.p-2{
        position: relative;
        top: 10px;
        font-size: 18pt;
        left: 20px;
        line-height:25px;
        font-family: '微软雅黑';
        margin: 0;
        color:#01DF01;
    }  
  .ip{
    position: absolute;
  left:40px;
  right:auto;
  top: 245px;

  }  
.abs{
  position: absolute;
  

  left:1250px;
  
  top: 520px;
}   
.bbs{
  position: absolute;
  left:10px;
  right:auto;
  top: 520px;

}
.table1{
  position: absolute;
  left:20px;
  right:auto;
  top: 320px;

}
    
</style>
  <script>
   
export default {
      data() {
        return {
          temdata: [{
            number: '1',
            IP: '192.168.1.13',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",
          }, {
            number: '2',
            IP: '192.168.1.15',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",
          }, {
            number: '3',
            IP: '192.168.13.110',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",
          }, {
            number: '4',
            IP: '192.168.13.112',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",
          }, {
            number: '5',
            IP: '192.168.13.114',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",
          }, {
            number: '6',
            IP: '192.168.13.116',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",
          }, {
            number: '7',
            IP: '192.168.13.118',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",}
          ],
          options: [{
          value: '选项1',
          label: '10'
        }, {
          value: '选项2',
          label: '20'
        }
        ],
        input: ''

        }
      }
    }

</script>
