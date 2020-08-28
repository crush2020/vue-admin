import request from '@/utils/request'

export function function1GetList() {
  return request({
    url: '/AlarmLevelViews',
    method: 'get'
  })
}

export function function1GetList1(page, limit) {
  return request({
    url: `/AlarmLevelViews/${page}&${limit}`,
    method: 'get'
  })
}

