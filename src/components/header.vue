<template>
  <div class="header">
    <el-dropdown class="head_user">
      <span class="el-dropdown-link">
        Admin<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
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
  background-color: #202329;
}
.head_user{
  float: right;
  vertical-align: middle;
}
</style>
