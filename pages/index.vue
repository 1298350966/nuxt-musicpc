<template>
  <div class="content">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <div><h1>登陆页面</h1></div>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">
          提交
        </el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "admin",
        password: "123456"
      },

      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 11, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 11, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let ret = await this.$store.dispatch("user/login", {
            username: this.ruleForm.username,
            password: this.ruleForm.password
          });
          console.log(ret.status);
          if (ret.status == 200) {
            this.$notify({
              title: "登录成功",
              type: "success"
            });
            setTimeout(() => {
              this.$router.push({ path: "/discovery" });
            }, 1000);
          } else {
            this.$notify({
              title: "警告",
              message: "用户密码错误",
              type: "warning"
            });
          }
        } else {
          this.$notify({
            title: "警告",
            message: "用户密码错误",
            type: "warning"
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.content {
  min-width: 200px;
  width: 400px;
  height: 400px;
  margin-left: -200px;
  margin-top: -200px;

 display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  background:#409EFE;
  box-shadow:5px 5px 5px #333333;
border-radius: 20px;
}
.el-form{
  width: 100%;
  display:flex;
  padding: 50px;
 justify-content:center;
 flex-direction:column;


}

</style>
