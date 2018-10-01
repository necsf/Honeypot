<template>
  <div>
    <el-main class="m-table">
      <el-table
        :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
        class="table1"
        row-style="30px"
        cell-style="padding:0"
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
      <div class="p-page" style="font-size: 12px;padding-left: 34px">显示第1到第{{1}}条记录，总共{{10}}条记录
        <span style="position: relative;left: 33px;font-size: 12px;">每页显示</span>
        <el-select v-model="pagesize" slot="prepend" placeholder="" id="pagesize" style="width: 65px;height: 30px;border-radius: 0px;font-size: 12px;left: 35px;">
          <el-option label="10" value="10"></el-option>
          <el-option label="20" value="20"></el-option>

        </el-select>
        <span style="margin-left:2px;position: relative;left: 32px">条信息<span style="margin-left: 20px">转到<el-input  v-model="jumper" style="width: 50px;height: 30px;margin-left: 2px;margin-right: 4px"></el-input>页</span><el-button class="button2" style="font-size: 12px;">跳转</el-button></span></div>

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
  </div>
</template>
<style scoped>

  .el-menu-item-group__title{
    padding: 0px;
  }
</style>
<script>
  export default {
    data(){
      return {
        jumper:10,
        pagesize:10,
      }
    },
    methods: {

    }
  };
</script>

