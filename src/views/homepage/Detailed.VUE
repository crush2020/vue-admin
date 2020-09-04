<template>
  <div class="home">
    <el-row :gutter="20" type="flex" align="middle" class="el-top">
      <el-col :span="8" :offset="9">
        <div class="grid-content bg-purple">
          <span class="el-top-sapan">智慧支护分析系统</span>
        </div>
      </el-col>
      <el-col :span="5" :offset="1">
        <div class="grid-content bg-purple">
          <router-link class="el-top-i" to="/home">
            <span class="el-icon-s-home"/>返回总图
          </router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Detailed',
  data() {
    return {}
  }
}
</script>

<style>
a:hover {color: #f9fafc;}
.home {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 10px;
  background-image: url(../../assets/image/bj.jpg);
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-top-sapan {
  color: #f9fafc;
  font-size: 50px;
}
.el-top-i {
  color: #409eff;
  height: 15%;
  font-size: 20px;
  margin-bottom: 10px;
}
.el-center {
  color: white;
}
.el-center-div {
  color: azure;
}
.el-buttom-div {
  color: #f9fafc;
}
</style>
