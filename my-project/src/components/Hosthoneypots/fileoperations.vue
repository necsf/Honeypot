<template>
    <el-container style="height:100%;" direction="vertrcal">
        <el-header class="h-input" height=150px; >
            <el-form :inline="true" 
            :model="formInline" 
            size="small"
            class="demo-form-inline" 
            :label-position="right" >
                <el-form-item label="操作类型:">
                    <el-select v-model="formInline.operations" >
                    <el-option label="打开文件" value="111"></el-option>
                    <el-option label="写文件" value="222"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="文件类型:">
                    <el-select v-model="formInline.files" >
                    <el-option label="IO_TYPE_FILE" value="IO_TYPE_FILE"></el-option>
                    <el-option label="IO_TYPE_FILE" value="IO_TYPE_FILE"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="文件路径:">
                    <el-select v-model="formInline.routers" >
                    <el-option label="C://" value="C:/"></el-option>
                    <el-option label="C://" value="C:/"></el-option>
                    </el-select>
                </el-form-item>
                    <el-form-item label="进程ID:">
                        <el-input v-model="formInline.progressID" ></el-input>
                    </el-form-item>
                    <el-form-item label="进程名:">
                        <el-input v-model="formInline.progress" ></el-input>
                    </el-form-item>
                    <el-form-item label="操作时间:">
                        <el-input v-model="formInline.date" ></el-input>
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
                :data="fileoperation"
                style="width: 100%">
                <el-table-column
                    prop="number"
                    width="80"
                    label="序号">
                    
                </el-table-column>
                <el-table-column
                    prop="operations"
                    label="操作类型"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="files"
                    label="文件类型"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="routers"
                    label="文件路径"
                    width="450">
                </el-table-column>
                    <el-table-column
                    prop="progress"
                    label="进程名称"
                    width="200">
                </el-table-column>
                <el-table-column
                    prop="progressID"
                    label="进程ID"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="操作时间"
                    width="150">
                </el-table-column>
            </el-table>
            <div class="p-page">显示第1到第{{1}}条记录，总共{{10}}条记录</div>
            
            <div style="float:right;margin-top:10px;">
                
                <!-- *********************************分页按钮 -->
                <el-pagination 
                background="#E95513"
                prev-text="上一页"
                next-text="下一页"
                @size-change="handleSizeChange"
                 @current-change="handleCurrentChange" 
                 :current-page="currentPage4" 
                 :page-sizes="[10, 20]" 
                 :page-size="100" 
                 layout="slot,sizes ,prev, pager, next,jumper" :total="50">
                <!-- <slot name="as">dddd</slot> -->
                </el-pagination>
            </div>
        </el-main>    
    </el-container>
</template>
<style >
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
    padding-top: 15px;
    color:#666666;
    float:left;
    font-size: 12pt;
}
/* 翻页背景色 */
.el-pagination .el-pager .active{
    background-color: #E95513 !important;
}
.el-pagination.is-background .el-pager li:not(.disabled):hover{
    color:#E95513 !important;
}
</style>
<script>
export default {
    data(){
        return {
            formInline: {

        },
            fileoperation:[
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
                    
                },

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
