<template>
  <div>
    <div class="header">
      <el-input v-model="obj.title" placeholder="标题" class="input"></el-input>
      <el-input v-model="obj.name" placeholder="发布人" class="input"></el-input>
      <el-date-picker v-model="obj.date" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
      <el-button type="primary" @click="add()">新增</el-button>
    </div>
    <div class="msg">
      <el-table :data="tableData" style="width: 60%;margin :0 auto" >
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        title: "",
        name: "",
        data: "",
      },
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    };
  },
  methods:{
      add:function(){
          console.log(this.obj.date);
                this.tableData.push({
                    address:this.obj.title,
                    name:this.obj.name,
                    date:this.obj.date
                });
                
            },
  }
  
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/userManage";
</style>