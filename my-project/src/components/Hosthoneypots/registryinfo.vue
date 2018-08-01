<template>
    <div>
        <el-main class="m-table">
        <el-table
                :header-cell-style="{background:'#EE6363',padding:0,color:'#FFFFFF'}"
                class="table1"
                :data="registryinfos"
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
                    prop="routers"
                    label="注册表路径"
                    width="450">
                </el-table-column>  
                <el-table-column
                    prop="operations"
                    label="操作类型"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="操作时间"
                    width="150">
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
    </div>
</template>
