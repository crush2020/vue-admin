<template>
  <div class="tablema">
    <el-button @click="resetDateFilter">新增剖面位置</el-button>
    <el-table :data="tableData" border="true" style="width: 100%">
      <el-table-column label="编号" width="300">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="名称" width="270">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.data1 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="位置信息描述" width="540">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '1',
          name: '应力传感器',
          data1: '好',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '1',
          name: '应力传感器',
          data1: '好',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '1',
          name: '应力传感器',
          data1: '好',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '1',
          name: '应力传感器',
          data1: '好',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style scoped>
.tablema {
  margin: 1em
}
</style>
