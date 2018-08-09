<template>
    <div class="table-network">
        <!-- <div style="height:100px;"></div> -->
        <el-table
            :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
            class="table1"
            row-style="30px"
            cell-style="padding:0"
            id="table11"
            :data="admindata"
            style="width: 100%">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                type="index"
                width="80"
                label="编号"
                :index="indexMethod">
            </el-table-column>
            <el-table-column
                prop="IP"
                label="IP"
                width="180">
            </el-table-column>
            <el-table-column
                prop="domainID"
                label="domainID"
                width="180">
            </el-table-column>
            <el-table-column
                prop="user"
                label="使用者">
            </el-table-column>
        </el-table>
        <p class="table-p1">显示第1条到第{{page}}条记录，总共{{page}}记录</p>
    </div>

</template>
<style>
.table-p1{
         font-family: 'Microsoft YaHei';
        font-size: 12pt;
        color:#BFBFBF;
    }


</style>

<script>
export default {
    data(){
        return{
            page:'4',
            admindata:[

              {
                  IP:'168.196.2.1',
                  domainID:'123',
                  user:'win789'
              },
              {
                  IP:'168.196.2.1',
                  domainID:'123',
                  user:'win789'
              }
            ]
        }

    }
}
</script>
