<template>
  <div class="tablema">
    <el-button class="top-button" type="primary" @click="resetDateFilter">新增类型</el-button>
    <el-table :data="tableData" :height="height" border stripe style="width: 100%">
      <el-table-column prop="deviceName" label="设备类型"/>
      <el-table-column prop="levelId" label="报警级别"/>
      <el-table-column prop="remark" label="备注"/>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[20, 30, 40, 50]"
        :page-size="pagesize"
        :total="count"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>
    </div>
    <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="新增设备类型" @open="open">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth" label="阈值系数参数">
          <el-input v-model="form.thresholdParameter" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="备注">
          <el-input v-model="form.remark" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="设备类型">
          <el-select v-model="form.deviceTypeId" placeholder="请选择">
            <el-option
              v-for="item in indexoption"
              :key="item.value"
              :label="item.deviceName"
              :value="item.id"/>
          </el-select>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="级别">
          <el-select v-model="form.levelId" placeholder="请选择">
            <el-option
              v-for="item in positionoption"
              :key="item.value"
              :label="item.id"
              :value="item.id"/>
          </el-select>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="多点位置">
          <el-select v-model="form.mplocation" placeholder="请选择多点位置">
            <el-option
              v-for="item in jidian"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form :inline="true" :model="form">
        <el-form-item :label-width="formLabelWidth" label="阈值基数参数">
          <el-input v-model="form.thresholdValue1" placeholder="输入阈值基数参数，值为小数"/>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.condition1" placeholder="判断设置">
            <el-option
              v-for="item in panduan"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form :inline="true" :model="form">
        <el-form-item :label-width="formLabelWidth" label="阈值基数参数">
          <el-input v-model="form.thresholdValue2" :disabled="!form.isscope" placeholder="输入阈值基数参数，值为小数"/>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.condition2" :disabled="!form.isscope" placeholder="判断设置">
            <el-option
              v-for="item in panduan"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
          <el-switch
            v-model="form.isscope"
            active-color="#13ce66"
            inactive-color="#ff4949"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="definite">确 定</el-button>
        <el-button type="success" @click="claear">重置</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="dialogFormVisible1" :close-on-click-modal="false" title="编辑设备类型">
      <el-form :model="form1">
        <el-form-item :label-width="formLabelWidth" label="阈值系数参数">
          <el-input v-model="form1.thresholdParameter" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="备注">
          <el-input v-model="form1.remark" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="设备类型">
          <el-select v-model="form1.deviceTypeId" placeholder="请选择">
            <el-option
              v-for="item in indexoption"
              :key="item.value"
              :label="item.deviceName"
              :value="item.id"/>
          </el-select>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="级别">
          <el-select v-model="form1.levelId" placeholder="请选择">
            <el-option
              v-for="item in positionoption"
              :key="item.value"
              :label="item.id"
              :value="item.id"/>
          </el-select>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="多点位置">
          <el-select v-model="form1.mplocation" placeholder="请选择多点位置">
            <el-option
              v-for="item in jidian"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form :inline="true" :model="form">
        <el-form-item :label-width="formLabelWidth" label="阈值基数参数">
          <el-input v-model="form1.thresholdValue1" placeholder="输入阈值基数参数，值为小数"/>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form1.condition1" placeholder="判断设置">
            <el-option
              v-for="item in panduan"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form :inline="true" :model="form1">
        <el-form-item :label-width="formLabelWidth" label="阈值基数参数">
          <el-input v-model="form1.thresholdValue2" :disabled="!form1.isscope" placeholder="输入阈值基数参数，值为小数"/>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form1.condition2" :disabled="!form1.isscope" placeholder="判断设置">
            <el-option
              v-for="item in panduan"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
          <el-switch
            v-model="form1.isscope"
            active-color="#13ce66"
            inactive-color="#ff4949"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel1">取 消</el-button>
        <el-button type="primary" @click="definite1">确 定</el-button>
        <el-button type="success" @click="claear">重置</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { function3GetList, function3GetList1, function3PostList, function3PostList1, function3PutList, function3PutList1, function3DeleteList1 } from '@/utils/network/function3'
import { indexGetList } from '@/utils/network/index'
import { function1GetList } from '@/utils/network/function1'

export default {
  data() {
    return {
      dialogFormVisible: false,
      dialogFormVisible1: false,
      formLabelWidth: '120px',
      height: '',
      tableData: [
        {
          analysisConditionsID: 34,
          condition1: 3,
          condition2: 1,
          deviceName: '固定测斜仪',
          deviceTypeId: 1,
          gid: 1,
          id: 31,
          isscope: false,
          levelId: 22,
          mplocation: 2,
          remark: '3654',
          thresholdParameter: 32534,
          thresholdValue1: 3654,
          thresholdValue2: 1
        }
      ],
      form: { isscope: false },
      form1: { isscope: false },
      indexoption: {},
      positionoption: {},
      formInline: {},
      jidian: [{ label: '深基点', value: 1 }, { label: '中基点', value: 2 }, { label: '浅基点', value: 3 }],
      panduan: [{ label: '大于', value: 1 }, { label: '小于', value: 2 }, { label: '等于', value: 3 }, { label: '大于等于', value: 4 }, { label: '小于等于', value: 5 }],
      count: 400,
      currentPage: 1,
      pagesize: 20
    }
  },
  created() {
    function3GetList().then(res => {
      this.tableData = res
      this.count = res.length
    })
    this.height = window.innerHeight - window.innerHeight * 0.13 - 80 + 'px'
  },
  mounted() {

  },
  methods: {
    resetDateFilter() {
      this.dialogFormVisible = !this.dialogFormVisible
      indexGetList().then(res => {
        this.indexoption = res
      })
      function1GetList().then(res => {
        this.positionoption = res
      })
    },
    handleEdit(index, row) {
      indexGetList().then(res => {
        this.indexoption = res
      })
      function1GetList().then(res => {
        this.positionoption = res
      })
      console.log(row)
      this.form1 = row
      this.dialogFormVisible1 = true
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const id = row.analysisConditionsID
        const tableData = this.tableData
        function3DeleteList1(id).then(res => {
          if (res.id) {
            tableData.splice(index, 1)
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          } else {
            this.$message.error('删除失败')
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    cancel() {
      this.dialogFormVisible = !this.dialogFormVisible
      this.$message('已取消新增')
    },
    definite() {
      const form = this.form
      const afrom = {}
      const bfrom = {}
      const tableData = this.tableData
      afrom.levelId = parseInt(form.levelId)
      afrom.deviceTypeId = form.deviceTypeId
      afrom.thresholdParameter = parseInt(form.thresholdParameter)
      afrom.remark = form.remark
      this.dialogFormVisible = !this.dialogFormVisible
      function3PostList(afrom).then(res => {
        if (res.id) {
          bfrom.analysisSettingId = parseInt(res.id)
          bfrom.mplocation = parseInt(form.mplocation)
          bfrom.thresholdValue1 = parseInt(form.thresholdValue1)
          bfrom.condition1 = parseInt(form.condition1)
          bfrom.isscope = form.isscope
          if (form.isscope) {
            bfrom.thresholdValue2 = parseInt(form.thresholdValue2)
            bfrom.condition2 = parseInt(form.condition2)
          } else {
            bfrom.thresholdValue2 = 2
            bfrom.condition2 = 2
          }
          function3PostList1(bfrom).then(res => {
            if (res.id) {
              function3GetList().then(res => {
                tableData.push(res[res.length - 1])
                this.$message({
                  message: '新增成功',
                  type: 'success'
                })
              })
            } else {
              this.$message.error('新增失败')
            }
          })
        } else {
          this.$message.error('新增失败')
        }
      })
    },
    cancel1() {
      this.dialogFormVisible1 = !this.dialogFormVisible1
      this.$message('已取消编辑')
    },
    definite1() {
      const form = this.form1
      const afrom = {}
      const aid = parseInt(form.id)
      const bfrom = {}
      const bid = parseInt(form.analysisConditionsID)
      afrom.levelId = parseInt(form.levelId)
      afrom.id = aid
      afrom.deviceTypeId = form.deviceTypeId
      afrom.thresholdParameter = parseInt(form.thresholdParameter)
      afrom.remark = form.remark
      bfrom.analysisSettingId = aid
      bfrom.id = bid
      bfrom.mplocation = parseInt(form.mplocation)
      bfrom.thresholdValue1 = parseInt(form.thresholdValue1)
      bfrom.condition1 = parseInt(form.condition1)
      bfrom.isscope = form.isscope
      if (form.isscope) {
        bfrom.thresholdValue2 = parseInt(form.thresholdValue2)
        bfrom.condition2 = parseInt(form.condition2)
      } else {
        bfrom.thresholdValue2 = 2
        bfrom.condition2 = 2
      }
      this.dialogFormVisible1 = !this.dialogFormVisible1
      function3PutList(aid, afrom).then(res => {
        console.log(res)
        if (!res) {
          this.$message({
            message: '编辑成功',
            type: 'success'
          })
        } else {
          this.$message.error('编辑失败')
        }
      })
      function3PutList1(bid, bfrom).then(res => {
        console.log(res)
        if (!res) {
          this.$message({
            message: '编辑成功',
            type: 'success'
          })
        } else {
          this.$message.error('编辑失败')
        }
      })
    },
    claear() {
      this.form = {}
    },
    open() {
      this.form = {}
    },
    handleSizeChange(val) {
      // 每页多少条
      const page = this.currentPage
      const limit = val
      function3GetList1(page, limit).then(res => {
        console.log(res)
        this.count = res.count
        this.tableData = res.table
      })
    },
    handleCurrentChange(val) {
      // 当前多少页
      const page = val
      const limit = this.pagesize
      function3GetList1(page, limit).then(res => {
        this.count = res.count
        this.tableData = res.table
      })
    }
  }
}
</script>

<style scoped>
.tablema {
  margin: 1em
}
.top-button {
  margin-bottom: 1em;
}
.block {
  margin-top: 1em;
}
</style>
