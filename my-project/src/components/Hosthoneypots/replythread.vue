<template>
  <el-container style="height:100%;" direction="vertrcal">
    <el-header class="h-input" height=150px; >
      <el-form :inline="true"
               :model="formInline"
               size="small"
               class="demo-form-inline"
               :label-position="right" >
        <el-form-item label="当前进程名:">
          <el-input v-model="formInline.progress" style="padding-left:70px;width:187px"></el-input>
        </el-form-item>
        <el-form-item label="当前进程ID:">
          <el-input v-model="formInline.progressID" style="padding-left:70px;width:187px"></el-input>
        </el-form-item>
        <el-form-item label="被恢复线程:">
          <el-input v-model="formInline.Xthread" style="padding-left:0px;width:187px"></el-input>
        </el-form-item>
        <el-form-item label="被恢复线程依附线程名:" >
          <el-input v-model="formInline.Xattthread" style="padding-left:0px;width:187px"></el-input>
        </el-form-item>
        <el-form-item label="被恢复线程依附线程ID:" >
          <el-input v-model="formInline.XprogressID" style="padding-left:0px;width:187px"></el-input>
        </el-form-item>
        <el-form-item label="操作时间:">
          <el-input v-model="formInline.date" style="padding-left:15px;width:187px" ></el-input>
        </el-form-item>
        <el-form-item>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-button style="background:#E95513;color:#ffffff;"  @click="onSubmit" class="funButton">查询</el-button>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main class="m-table">
      <el-table
        :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
        row-style="30px"
        cell-style="padding:0"
        class="table1"
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
          label="当前进程ID"
          width="150">
        </el-table-column>
        <el-table-column
          prop="progress"
          label="当前进程名"
          width="200">
        </el-table-column>
        <el-table-column
          prop="XthreadID"
          label="被恢复线程ID"
          width="200">
        </el-table-column>
        <el-table-column
          prop="XprogressID"
          label="被恢复线程依附线程ID"
          width="200">
        </el-table-column>
        <el-table-column
          prop="date"
          label="操作时间">
        </el-table-column>
      </el-table>
      <div class="p-page" style="font-size: 12px;padding-left: 34px">显示第1到第{{1}}条记录，总共{{10}}条记录
        <span style="position: relative;left: 33px;font-size: 12px;">每页显示</span>
        <el-select v-model="pagesize" slot="prepend" placeholder="" id="pagesize" style="width: 65px;height: 30px;border-radius: 0px;font-size: 12px;left: 35px;">
          <el-option label="10" value="10"></el-option>
          <el-option label="20" value="20"></el-option>

        </el-select>
        <span style="margin-left:2px;position: relative;left: 32px">条信息<span style="margin-left: 20px">转到<el-input  v-model="jumper" style="width: 50px;height: 30px;margin-left: 2px;margin-right: 4px"></el-input>页</span><el-button class="button2"style="font-size: 12px;">跳转</el-button></span></div>

      <div style="float:right;margin-top:10px;">

        <!-- *********************************分页按钮 -->
        <el-pagination
          background="#E95513"
          prev-text="上一页"
          next-text="下一页"
          jumper-text="转到"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20]"
          :page-size="100"

          layout="slot,prev, pager, next" :total="50">
          <!-- <slot name="as">dddd</slot> -->
        </el-pagination>
      </div>

    </el-main>
  </el-container>
</template>
<style>
  .table1 td{
    padding: 0;
    height: 30px;
  }
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
        jumper:10,
        pagesize:10,
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
