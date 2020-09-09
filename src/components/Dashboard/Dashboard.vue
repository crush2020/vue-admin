/* eslint-disable no-caller */
<template>
  <div class="Dashboard">
    <div ref="mydas" :style="{height: '500px'}"/>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  props: {
    // 配置数据
    content: {
      type: Object,
      default: () => {
        return {
          value: 10,
          title: '顶部'
        }
      }
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
      this.timer = setInterval(this.drawLine, 1000)
    })
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    drawLine() {
      const value = this.content.value
      const fontSize = window.innerWidth * 0.01
      const fontSize1 = fontSize * 1.7
      const text = this.content.title
      const echarts = this.$echarts
      const myChart = this.$echarts.init(this.$refs.mydas)
      const options = {
        // backgroundColor: '#010101',
        title: {
          bottom: '7%',
          left: 'center',
          text: text,
          textStyle: {
            align: 'center',
            color: '#FFFFFF',
            fontSize: 22
          }
        },
        series: [
          {
            type: 'gauge',
            name: '外层辅助',
            radius: '86%',
            startAngle: '225',
            endAngle: '-45',
            splitNumber: '120',
            pointer: {
              show: false
            },
            detail: {
              show: false
            },
            data: [{
              value: 1
            }],
            // data: [{value: 1, name: 90}],
            title: {
              show: true,
              offsetCenter: [0, 30],
              textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 20
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: [
                  [1, 'rgb(0,191,255)']
                ],
                width: 8,
                opacity: 1
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              length: 20,
              lineStyle: {
                color: '#051932',
                width: 0,
                type: 'solid'
              }
            },
            axisLabel: {
              show: false
            }
          },
          {
            name: '内层数据刻度',
            type: 'gauge',
            radius: '80%',
            center: ['50%', '50%'],
            axisLine: {
              lineStyle: {
                width: 50,
                // color: [
                //   // [0, 'rgb(228,93,11)'],
                //   [0.5, new echarts.graphic.LinearGradient(
                //     0, 1, 0, 0,
                //     [{
                //       offset: 0,
                //       color: 'rgb(228,93,11)'
                //     }, {
                //       offset: 0.8,
                //       color: 'rgb(235,205,6)'
                //     }]
                //   )],
                //   [0.9, new echarts.graphic.LinearGradient(
                //     0, 1, 0, 0,
                //     [{
                //       offset: 0,
                //       color: 'rgb(13,211,97)'
                //     }, {
                //       offset: 0.6,
                //       color: 'rgb(235,205,6)'
                //     }]
                //   )],
                //   [1, 'rgb(13,211,97)']
                // ]
                color: [
                  [0, 'rgb(13,211,97)'],
                  [0.5, new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [{
                      offset: 0,
                      color: 'rgb(13,211,97)'
                    }, {
                      offset: 0.8,
                      color: 'rgb(235,205,6)'
                    }]
                  )],
                  [0.9, new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [{
                      offset: 0,
                      color: 'rgb(228,93,11)'
                    }, {
                      offset: 0.6,
                      color: 'rgb(235,205,6)'
                    }]
                  )],
                  [1, 'rgb(228,93,11)']
                ]
              }
            },
            splitLine: {
              length: 25,
              lineStyle: {
                width: 5,
                color: '#ffffff'
              }
            },
            axisTick: {
              lineStyle: {
                width: 2,
                color: '#ffffff'
              }
            },
            axisLabel: {
              color: 'rgb(0,191,255)',
              distance: 50,
              fontSize: fontSize
            },
            detail: {
              show: true,
              offsetCenter: ['0', '80%'],
              fontSize: fontSize1,
              color: 'rgb(0,191,255)'
            },
            itemStyle: {
              normal: {
                color: 'rgb(0,191,255)'
              }
            },
            pointer: {
              width: '4%',
              length: '95%'
            },
            data: [{
              value: value
            }],
            silent: false
          },
          {
            name: '最内层线',
            type: 'gauge',
            radius: '30%',
            center: ['50%', '50%'],
            startAngle: 360,
            endAngle: 0,
            axisLine: {
              show: false,
              lineStyle: {
                opacity: 0
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                opacity: 0
              }
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              length: 2,
              lineStyle: {
                color: '#00b3ff',
                width: 3,
                type: 'solid'
              }
            },
            detail: {
              show: false
            },
            pointer: {
              show: false
            }
          }
        ]
      }
      // 开始画图
      myChart.setOption(options)
    }
  }
}
</script>

<style>
.Dashboard {
  background-image: url(../../assets/image/bj.jpg);
}
</style>
