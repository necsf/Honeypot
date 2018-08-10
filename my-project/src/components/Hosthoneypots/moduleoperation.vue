<template>
    <el-container style="height:100%;" direction="vertrcal">
        <el-header class="h-input" height=150px; >
            <el-form :inline="true" 
            :model="formInline" 
            size="small"
            class="demo-form-inline" 
            :label-position="right" >
                    <el-form-item label="操作类型:">
                        <el-input v-model="formInline.operation" style="padding-left:1px;width:187px"></el-input>
                    </el-form-item>
                    <el-form-item label="进程名:">
                        <el-input v-model="formInline.progress" style="padding-left:15px;width:187px"></el-input>
                    </el-form-item>
                    <el-form-item label="进程ID:">
                        <el-input v-model="formInline.progressID" style="padding-left:15px;width:187px" ></el-input>
                    </el-form-item>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <el-form-item label="模块名:">
                        <el-input v-model="formInline.modulname" style="padding-left:15px;width:187px"></el-input>
                    </el-form-item>
                    <el-form-item label="操作时间:">
                        <el-input v-model="formInline.date" style="padding-left:1px;width:187px"></el-input>
                    </el-form-item>
                   <el-form-item>
                    <el-button style="background:#E95513;color:#ffffff;"  @click="onSubmit">查询</el-button>
                </el-form-item> 
            </el-form>
        </el-header>
        <el-main class="m-table">
            <el-table
                :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
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
                    prop="operations"
                    label="数据类型"
                    width="150">
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
                    prop="modelname"
                    label="模块名"
                    width="200">
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
                background
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
