import request from '@/utils/request'

export function manageGetList() {
  return request({
    url: '/DeviceViews',
    method: 'get'
  })
}

export function manageGetList1(page, limit) {
  return request({
    url: `/DeviceViews/${page}&${limit}`,
    method: 'get'
  })
}

