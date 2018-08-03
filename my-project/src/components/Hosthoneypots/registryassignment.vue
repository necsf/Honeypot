<template>
    <el-container style="height:100%;" direction="vertrcal">
        <el-header class="h-input" height=150px; >
            <el-form :inline="true" 
            :model="formInline" 
            size="small"
            class="demo-form-inline" 
            :label-position="right" >
                    <el-form-item label="进程名:">
                        <el-input v-model="formInline.progress" ></el-input>
                    </el-form-item>
                    <el-form-item label="进程ID:">
                        <el-input v-model="formInline.progressID" ></el-input>
                    </el-form-item>
                    <el-form-item label="键名">
                        <el-input v-model="formInline.keyname" ></el-input>
                    </el-form-item>
                    <el-form-item label="注册表路径">
                        <el-input v-model="formInline.path" ></el-input>
                    </el-form-item>
                    <el-form-item label="操作时间:">
                        <el-input v-model="formInline.date" ></el-input>
                    </el-form-item>
                   <el-form-item>
                    <el-button type="danger"  @click="onSubmit">查询</el-button>
                </el-form-item> 
            </el-form>
        </el-header>
        <el-main class="m-table">
            <el-table
                :header-cell-style="{background:'#EE6363',padding:0,color:'#FFFFFF'}"
                class="table1"
                row-style="30px"
                cell-style="padding:0"
                id="table11"
                :data="filemap"
                style="width: 100%">
                <el-table-column
                    prop="number"
                    width="80"
                    label="序号">
                    
                </el-table-column>
                <el-table-column
                    prop="progressID"
                    label="进程ID"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="progress"
                    label="进程名称"
                    width="200">
                </el-table-column>
                <el-table-column
                    prop="keyname"
                    label="键名"
                    width="200">
                </el-table-column>
                <el-table-column
                    prop="operations"
                    label="待写入数据类型"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="datasize"
                    label="数据大小"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="registrypath"
                    label="注册表路径"
                    width="450">
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="操作时间">
                </el-table-column>
            </el-table>
            <div style="float:right;margin-top:10px;">
                <!-- <p class="p-page">显示第1到第{{1}}条记录  每页显示</p> -->
                <!-- *********************************分页按钮 -->
                <el-pagination 
                @size-change="handleSizeChange"
                 @current-change="handleCurrentChange" 
                 :current-page="currentPage4" 
                 :page-sizes="[10, 20, 30, 40]" 
                 :page-size="100" 
                 layout="total, sizes, prev, pager, next, jumper" :total="50">
                </el-pagination>
            </div>
            
        </el-main>    
    </el-container>
</template>
<style>
/* .table1 td{
        padding: 0;
        height: 30px;
} */
.m-table{
    width: 100%;
    height: 100%;
}
.h-input{
    width: 100%;
}
.p-page{
    font-size: 12pt;
}
</style>
<script>
export default {
    data(){
        return {
            formInline: {

        },
            filemap:[
                {
                    number:'1223',
                    operations:"打开文件",
                    files:'IO_TYPE_FILE',
                    routers:'C:win/di',
                    progress:'hosthoney.exe',
                    progressID:'11222',
                    date:'2018'
                    
                },
                 {
                    number:'1223',
                    operations:"打开文件",
                    files:'IO_TYPE_FILE',
                    routers:'C:win/di',
                    progress:'hosthoney.exe',
                    progressID:'11222',
                    date:'2018'
                    
                },
                 {
                    number:'1223',
                    operations:"打开文件",
                    files:'IO_TYPE_FILE',
                    routers:'C:win/di',
                    progress:'hosthoney.exe',
                    progressID:'11222',
                    date:'2018'
                    
                }


            ]
        }
    },
    methods: {
        // 分页
    //      handleSizeChange(val) {
    //     console.log(`每页 ${val} 条`);
    //   },
    //   handleCurrentChange(val) {
    //     console.log(`当前页: ${val}`);
    //   }
    // },
       onSubmit() {
        console.log('submit!');
      }
    }
};
</script>
