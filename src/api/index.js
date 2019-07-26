import request from '@/utils/request'

// 获取列表
export function getTaskList () {
  return request({
    url: '/api/web/orders',
    method: 'get'
  })
}

// 获取详情
export function getTaskDetail (query) {
  return request({
    url: '/api/web/order/show?processId=' + query,
    method: 'get'
  })
}
