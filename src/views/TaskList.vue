<template>
  <div class="taskList">
    <div v-for="(item,index) of list" :key="index" class="task-item"  @click="getDetail(item.processId)">
      <div class="flex">
        <div class="left">
          <div class="item item-1">
            <span class="en">GONGDANHAO</span>
            <span class="cn">工单号</span>
            <span class="value">{{item.orderId}}</span>
          </div>
          <div class="item item-2">
            <span class="en">GONGWEI</span>
            <span class="cn">工位</span>
            <span class="value">{{item.station}}</span>
          </div>
          <div class="flex">
            <div class="item item-3">
              <span class="en">GONGXUHAO</span>
              <span class="cn">工序号</span>
              <span class="value">{{item.processId}}</span>
            </div>
            <div class="item item-4">
              <span class="en">GONGXUHAO</span>
              <span class="cn">工序名</span>
              <span class="value">{{item.processName}}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTaskList } from '@/api/index'
export default {
  name: 'task',
  data () {
    return {
      list: [
        // { id: 'wo031808006', gw: '车削', gxh: '01', gxm: '车外圆' },
        // { id: 'wo031808006', gw: '车削', gxh: '01', gxm: '车外圆' },
        // { id: 'wo031808006', gw: '车削', gxh: '01', gxm: '车外圆' }
      ]
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      getTaskList().then(response => {
        this.list = response
      })
    },
    getDetail (id) {
      this.$router.push({ path: `/task/detail/${id}` })
    }
  }
}
</script>
