<template>
  <div class="tablema">
    <el-button class="top-button" type="primary" @click="resetDateFilter">新增报警级别</el-button>
    <el-table :data="tableData" :height="height" border stripe style="width: 100%">
      <el-table-column prop="deviceName" label="设备类型"/>
      <el-table-column prop="level" label="等级"/>
      <el-table-column prop="opinion" label="意见"/>
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
    <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="新增报警级别" @open="open">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth" label="设备类型">
          <el-select v-model="form.deviceTypeId" placeholder="请选择">
            <el-option
              v-for="item in indexoption"
              :key="item.value"
              :label="item.deviceName"
              :value="item.id"/>
          </el-select>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="等级">
          <el-input v-model="form.level" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="意见">
          <el-input v-model="form.opinion" auto-complete="off"/>
        </el-form-item>
        <!-- <el-form-item :label-width="formLabelWidth" label="备注">
          <el-input v-model="form.remark" auto-complete="off"/>
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="definite">确 定</el-button>
        <el-button type="success" @click="claear">重置</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="dialogFormVisible1" :close-on-click-modal="false" title="编辑报警级别">
      <el-form :model="form1">
        <el-form-item :label-width="formLabelWidth" label="设备类型">
          <el-select v-model="form1.deviceTypeId" placeholder="请选择">
            <el-option
              v-for="item in indexoption"
              :key="item.value"
              :label="item.deviceName"
              :value="item.id"/>
          </el-select>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="等级">
          <el-input v-model="form1.level" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="意见">
          <el-input v-model="form1.opinion" auto-complete="off"/>
        </el-form-item>
        <!-- <el-form-item :label-width="formLabelWidth" label="备注">
          <el-input v-model="form1.remark" auto-complete="off"/>
        </el-form-item> -->
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
import { function1GetList, function1GetList1, function1PostList, function1PutList, function1DeleteList } from '@/utils/network/function1'
import { indexGetList } from '@/utils/network/index'

export default {
  data() {
    return {
      dialogFormVisible: false,
      dialogFormVisible1: false,
      formLabelWidth: '120px',
      height: '',
      tableData: [
        {
          deviceName: '固定测斜仪',
          deviceTypeId: 1,
          level: 435316,
          id: 7,
          opinion: 1
        }
      ],
      form: {},
      form1: {},
      indexoption: {},
      count: 400,
      currentPage: 1,
      pagesize: 20
    }
  },
  created() {
    function1GetList().then(res => {
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
    },
    handleEdit(index, row) {
      indexGetList().then(res => {
        this.indexoption = res
      })
      this.form1 = row
      this.dialogFormVisible1 = true
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const id = row.id
        const tableData = this.tableData
        function1DeleteList(id).then(res => {
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
      const from = this.form
      const tableData = this.tableData
      from.level = parseInt(from.level)
      this.dialogFormVisible = !this.dialogFormVisible
      function1PostList(from).then(res => {
        if (res.id) {
          function1GetList().then(res => {
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
    },
    cancel1() {
      this.dialogFormVisible1 = !this.dialogFormVisible1
      this.$message('已取消编辑')
    },
    definite1() {
      const id = this.form1.id
      const form1 = this.form1
      form1.level = parseInt(form1.level)
      this.dialogFormVisible1 = !this.dialogFormVisible1
      function1PutList(id, form1).then(res => {
        if (res) {
          this.$message.error('编辑失败')
        } else {
          this.$message({
            message: '编辑成功',
            type: 'success'
          })
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
      function1GetList1(page, limit).then(res => {
        console.log(res)
        this.count = res.count
        this.tableData = res.table
      })
    },
    handleCurrentChange(val) {
      // 当前多少页
      const page = val
      const limit = this.pagesize
      function1GetList1(page, limit).then(res => {
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
