<template>
  <div class="login-container">
    <el-form :model="user" :rules="rules" ref="userForm" class="login-form">
      <el-form-item prop="name">
        <el-input v-model="user.name">
          <i slot="prefix" class="iconfont icon-user el-input__icon"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-bind:type="isShowPassword?'text':'password'" v-model="user.password">
          <i slot="prefix" class="iconfont icon-password el-input__icon"></i>
          <i slot="suffix" @click="showPassword" :class="isShowPassword?'iconfont el-input__icon icon-eye':'iconfont el-input__icon icon-eye-close'"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn-submit" type="primary" @click="submitForm('userForm')">登录</el-button>
      </el-form-item>
      <el-form-item>
        <router-link class="login-btn-register" to="/register">注册</router-link>
      </el-form-item>
      <!-- <el-button type="text" @click="goRegister">注册</el-button> -->
      <!-- <div> -->
      <!-- </div> -->
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        name: "",
        password: ""
      },
      isShowPassword: false,
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    showPassword: function() {
      var vm = this;
      vm.isShowPassword = !vm.isShowPassword;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        // element 验证form
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          window.location.href = "/#/Index";
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goRegister: function() {
      this.$router.push({ path: "./index" });
      // this.$router.push({ path: "./register" });
    }
  }
};
</script>

<style>
.login-container {
  height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  position: fixed;
  top: 0px;
  left: 0px;
  overflow-y: auto;
}

.login-form {
  position: absolute;
  left: 0;
  right: 0;
  width: 320px;
  max-width: 80vw;
  margin: 20vh auto;
}

.login-btn-submit {
  width: 100%;
}

.login-btn-register {
  color: white;
}
</style>
