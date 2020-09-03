<template>
  <div class="home">
    <el-row :gutter="20" type="flex" align="middle" class="el-top">
      <el-col :span="8" :offset="9">
        <div class="grid-content bg-purple">
          <span class="el-top-sapan">智慧支护分析系统</span>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <router-link class="el-top-i" to="/dashboard/dashboard">
            <span class="el-icon-s-platform"/>智慧管理系统后台
          </router-link>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center" class="el-center">
      <el-col :span="20"><div class="grid-content bg-purple el-center-div">1</div></el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center" class="el-buttom">
      <el-col :span="4">
        <div class="grid-content bg-purple el-buttom-div">
          <waterpolo/>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple el-buttom-div">
          <linechart/>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple el-buttom-div">
          <piechart/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Waterpolo from '@/components/Waterpolo/Waterpolo'
import Piechart from '@/components/Piechart/Piechart'
import Linechart from '@/components/Linechart/Linechart'

export default {
  components: {
    Waterpolo,
    Piechart,
    Linechart
  },
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
  font-size: 25px;
  margin-bottom: 10px;
}
.el-center {
  color: white;
}
.el-center-div {
  background-color: tomato;
}
.el-buttom-div {
  color: #f9fafc;
}
</style>
