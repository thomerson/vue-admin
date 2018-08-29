<template>
    <div>
        <el-container>
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
               <cmenu></cmenu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
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

        <!-- <cmenu></cmenu>
        <div class="rightContent">
            <cheader></cheader>
            <div class="middleContent">
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
                <p>Welcome</p>
            </div>
        </div>
        <cbacktotop></cbacktotop> -->
    </div>
</template>

<script>
import cbacktotop from "@/components/backtotop";
import cheader from "@/components/header";
import cmenu from "@/components/menu";
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
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
