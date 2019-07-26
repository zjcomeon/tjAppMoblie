<template>
  <div class="taskList">
    <div v-for="(item,index) of list" :key="index" class="task-item"  @click="getDetail(item.id)">
      <div class="clearfix">
        <div class="left">
          <div class="item item-1">{{item.orderId}}</div>
          <div class="item item-2">{{item.station}}</div>
          <div class="item item-3">{{item.processId}}</div>
          <div class="item item-4">{{item.processName}}</div>
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
