<template>
    <div class="register-container">
        <el-form :model="user" :rules="rules" ref="userForm" label-width="100px" class="login-form">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('userForm')">登录</el-button>
                <el-button type="text">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名" }]
      }
    };
  }
};
</script>

<style>
</style>
