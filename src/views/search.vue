<template>
  <div>
    <el-container>
      <cheader></cheader>
      <el-main class="el-main">
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
    <cbacktotop></cbacktotop>
  </div>
</template>

<script>
  import cbacktotop from "@/components/backtotop";
  import cheader from "@/components/header";
  import cmenu from "@/components/menu";
  export default {
    name: "search",
    data() {
      const item = {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      };
      return {
        tableData: Array(20).fill(item)
      };
    },
    components: {
      cbacktotop: cbacktotop,
      cheader: cheader,
      cmenu: cmenu
    }
  };
</script>

<style>
  div.rightContent {
    margin-top: 70px;
    padding-top: 10px;
  }
  .el-aside {
    color: #333;
  }
  .el-main {
    margin-top: 70px;
  }
</style>
