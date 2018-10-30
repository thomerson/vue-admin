<template>
    <div>
        <el-container>
            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <span>Admin</span>
                         <el-button type="warning" circle>A</el-button>
                        <!-- <i class="el-icon-setting" style="margin-right: 15px"></i> -->
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-header>
                <el-main>
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
        </el-container>
        <div class="rightContent">
            <cheader></cheader>
        </div>
        <cbacktotop></cbacktotop>
    </div>
</template>

<script>
import cbacktotop from "@/components/backtotop";
import cheader from "@/components/header";
// import cmenu from "@/components/menu";
export default {
  name: "index",
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
    cheader: cheader
    // cmenu: cmenu
  }
};
</script>

<style>
div.rightContent {
  margin-top: 70px;
  padding-top: 10px;
}
.el-header {
  background-color: #202329;
  color: #fff;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
