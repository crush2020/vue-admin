<template>
  <div class="Piechart">
    <div ref="mypie" :style="{ height: height+'px' }"/>
  </div>
</template>

<script>
export default {
  name: 'Piechart',
  props: {
    // 配置数据
    content: {
      type: Object,
      default: () => {
        return {
          seriesData: [{ name: '二元', value: '30000' }, { name: '大白', value: '40000' }, { name: '长大', value: '60000' }, { name: '杜洛克', value: '80000' }, { name: '二元', value: '140000' }],
          text: '压力'
        }
      }
    }
  },
  data() {
    return {
      height: 400
    }
  },
  watch: {
    value: {
      // 数据更新后更新视图，初次绑定时不执行方法
      handler(oldVal, newVal) {
        this.$nextTick(() => {
          this.drawLine()
        })
      },
      deep: true,
      immediate: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawLine()
    })
  },
  methods: {
    drawLine() {
      const colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF']
      const seriesData = this.content.seriesData
      const legendData = []
      const text = this.content.text
      for (var i = 0; i < seriesData.length; i++) {
        legendData[i] = seriesData[i].name
      }
      const myChart = this.$echarts.init(this.$refs.mypie)
      const options = {
        // backgroundColor: {
        //   type: 'linear',
        //   x: 0,
        //   y: 0,
        //   x2: 1,
        //   y2: 1,
        //   colorStops: [{
        //     offset: 0,
        //     color: '#0f2c70' // 0% 处的颜色
        //   }, {
        //     offset: 1,
        //     color: '#091732' // 100% 处的颜色
        //   }],
        //   globalCoord: false // 缺省为 false
        // },
        title: {
          text: text,
          x: 'center',
          y: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item',
          borderColor: 'rgba(255,255,255,.3)',
          backgroundColor: 'rgba(13,5,30,.6)',
          borderWidth: 1,
          padding: 5,
          formatter: function(parms) {
            var str = parms.marker + '' + parms.data.name + '</br>' +
              '数量：' + parms.data.value + '个</br>' +
              '占比：' + parms.percent + '%'
            return str
          }
        },
        legend: {
          type: 'scroll',
          top: '8%',
          textStyle: {
            color: '#fff'
          },
          data: legendData
        },
        series: [{
          type: 'pie',
          center: ['50%', '50%'],
          radius: ['25%', '45%'],
          clockwise: true,
          avoidLabelOverlap: true,
          hoverOffset: 15,
          itemStyle: {
            normal: {
              color: function(params) {
                return colorList[params.dataIndex]
              }
            }
          },
          label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}：{d}%}\n{hr|}',
            rich: {
              hr: {
                backgroundColor: 't',
                borderRadius: 3,
                width: 3,
                height: 3,
                padding: [3, 3, 0, -12]
              },
              a: {
                padding: [-25, 5, -25, 5]
              }
            }
          },
          labelLine: {
            normal: {
              length: '4%',
              length2: '5%',
              lineStyle: {
                width: 1
              }
            }
          },
          data: seriesData
        }]
      }
      myChart.setOption(options)
    }
  }
}
</script>

<style>
</style>
