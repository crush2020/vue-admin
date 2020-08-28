import request from '@/utils/request'

export function indexGetList() {
  return request({
    url: '/DeviceViews',
    method: 'get'
  })
}

export function indexGetList1(page, limit) {
  return request({
    url: `/DeviceViews/${page}&${limit}`,
    method: 'get'
  })
}

