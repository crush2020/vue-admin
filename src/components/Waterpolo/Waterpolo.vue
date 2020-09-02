<template>
  <div class="WaterPolo">
    <div ref="mypolo" :style="{height: '100px', width: '100px'}" />
  </div>
</template>

<script>
export default {
  name: 'WaterPolo',
  props: {
    // 配置数据
    content: {
      type: Object,
      default: () => {
        return {
          value: 0.56,
          index: 0,
          textName: '压力'
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
    })
  },
  methods: {
    drawLine() {
      const value = this.content.value
      const index = this.content.index
      const textName = this.content.textName
      const colors = [
        ['#00d5ee', '#076c83'],
        ['#fe3f4f', '#7d273a']
      ]
      const bgColors = ['#0d263c', '#26172c']
      // 波浪的层数
      const data = [value, value, value]
      const myChart = this.$echarts.init(this.$refs.mypolo)
      // 创建一个options
      const options = {
        // backgroundColor: '#051c45',
        graphic: [
          {
            type: 'group',
            left: 'center',
            bottom: 10,
            children: [
              {
                type: 'text',
                z: 100,
                left: '10',
                top: 'middle',
                style: {
                  fill: colors[index][0],
                  text: textName + (value * 100).toFixed(1) + '%'
                }
              }
            ]
          }
        ],
        series: [
          {
            type: 'liquidFill',
            radius: '65%',
            center: ['50%', '40%'],
            data: data,
            color: colors[index],
            outline: {
              // 外边框
              show: true,
              borderDistance: 4, // 边框距离
              itemStyle: {
                borderWidth: 2,
                borderColor: colors[index][0]
                // shadowBlur: 3,
                // shadowColor: colors[colorIndex][0]
              }
            },
            backgroundStyle: {
              borderWidth: 2, // 内边框宽度
              borderColor: '#051c45', // colors[colorIndex][0], //背景内边框
              color: bgColors[index], // 背景颜色
              shadowColor: bgColors[index], // 阴影
              shadowBlur: 5 // 阴影模糊
            },
            label: {
              normal: {
                formatter: (value * 100).toFixed(1) + '%',
                textStyle: {
                  fontSize: 13
                },
                insideColor: '#fff' // colors[colorIndex][0]
              }
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

<style></style>
