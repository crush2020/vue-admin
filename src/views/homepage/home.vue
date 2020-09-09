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
          <router-link class="el-top-i" to="/dashboard/dashboard">
            <span class="el-icon-s-platform"/>智慧管理系统后台
          </router-link>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center" class="el-center">
      <el-col :span="8">
        <div class="grid-content bg-purple el-buttom-div">
          <dashboard :content="content"/>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-top-content bg-purple el-center-div">
          <div class="el-top-i">采煤机当前位置</div>
          <rotation/>
          <router-link class="el-top-i" to="/xiangxi">
            <span class="el-icon-s-grid"/>点击查看单个设备详细内容
          </router-link>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple el-buttom-div">
          <dashboard/>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center" class="el-buttom">
      <el-col :span="8">
        <div class="grid-content bg-purple el-buttom-div">
          <barchart/>
        </div>
      </el-col>
      <el-col :span="8">
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
    <el-row :gutter="20" type="flex" justify="center" class="el-buttom1">
      <el-col :span="4">
        <div class="grid-content bg-purple el-buttom-div">
          <waterpolo/>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple el-buttom-div">
          <waterpolo/>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple el-buttom-div">
          <waterpolo/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Waterpolo from '@/components/Waterpolo/Waterpolo'
import Piechart from '@/components/Piechart/Piechart'
import Linechart from '@/components/Linechart/Linechart'
import Rotation from '@/components/Rotation/Rotation'
import Dashboard from '@/components/Dashboard/Dashboard'
import Barchart from '@/components/Barchart/Barchart'

export default {
  components: {
    Waterpolo,
    Piechart,
    Linechart,
    Rotation,
    Dashboard,
    Barchart
  },
  data() {
    return {
      content: {
        value: 50,
        title: '底部'
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      // this.timer = setInterval(this.abc, 500)
    })
  },
  methods: {
  }
}
</script>

<style>
a:hover {color: #f9fafc;}
.home {
  width: 100%;
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
.grid-top-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
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
