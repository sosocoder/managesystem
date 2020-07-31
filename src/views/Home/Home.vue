<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" style="height:290px">
        <div class="user">
          <img :src="userImg" alt />
          <div class="userinfo">
            <p class="name">SOSO</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>
            上次登录时间：
            <span>2020-7-20</span>
          </p>
          <p>
            上次登录地点：
            <span>广州</span>
          </p>
        </div>
      </el-card>
      <el-card shadow="hover" style="height:440px;margin-top:20px;">
        <el-table :data ="tableData">
          <el-table-column v-for="(val,key) in tableLabel" :key="key" :prop = "key" :label = "val"></el-table-column>
        </el-table>
      </el-card>

    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card
          shadow="hover"
          v-for="item in countData"
          :key="item.name"
          :body-style="{display : 'flex',padding : 0}"
        >
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
          <div class="detail">
            <p class="num">￥{{item.value}}</p>
            <p class="txt">{{item.name}}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover" style="height:280px">
        <div id="echarts1" style="width: 100%;height:290px;"></div>
      </el-card>
      <div class="graph">
        <el-card shadow="hover" style="height:280px">
          <div id="echarts2" style="width: 100%;height:250px;"></div>
        </el-card>
        <el-card shadow="hover" style="height:280px">
          <div id="echarts3" style="width: 100%;height:250px;"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      userImg: require("../../assets/imgs/user.png"),
      
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980"
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef"
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980"
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef"
        }
      ],
      tableData:[],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      
    };
  },
  methods: {
    getTableData() {
      this.$http("/home/getData").then(res => {
        res = res.data
        this.tableData = res.data.tableData
       
      });
    },
    eone: function() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("echarts1"));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "课程销量"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["ES6", "小程序", "vue", "Springboot", "react", "redis"]
        },
        yAxis: {},  
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    etwo: function() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("echarts2"));

      // 指定图表的配置项和数据
      var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ["ES6", "小程序", "vue", "Springboot", "react", "redis"]
    },
    series: [
        {
            name: '课程热度',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 5, name: 'ES6'},
                {value: 20, name: '小程序'},
                {value: 36, name: 'vue'},
                {value: 10, name: 'Springboot'},
                {value: 10, name: 'react'},
                {value: 20, name: 'redis'}

            ]
        }
    ]
};

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    ethree: function() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("echarts3"));

      // 指定图表的配置项和数据
      var option = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ["ES6", "小程序", "vue", "Springboot", "react", "redis"]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'ES6',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '小程序',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'vue',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'Springboot',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'react',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: 'redis',
            type: 'line',
            stack: '总量',
            data: [520, 632, 961, 934, 1280, 130, 1320]
        },

    ]
};


      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  created() {
    this.getTableData();
  },
  mounted () {
    this.eone();
    this.etwo();
    this.ethree();
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/home";
</style>