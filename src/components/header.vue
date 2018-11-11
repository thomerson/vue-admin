<template>
  <div class="header">
    <el-header>
      <el-dropdown>
        <span class="el-dropdown-link">
          Admin<i class="el-icon-user el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">黄金糕</el-dropdown-item>
          <el-dropdown-item command="b">狮子头</el-dropdown-item>
          <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
          <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        logo: "",
        navs: ["top", "middle"]
      };
    }
  };
</script>

<style>
  .header {
    position: fixed;
    top: 0px;
    width: 100%;
    height: 70px;
    background-color: black;
    color: white;
  }
  .el-header {
    text-align: right;
    font-size: 12px;
    vertical-align:middle;
  }
</style>
