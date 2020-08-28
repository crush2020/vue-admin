import request from '@/utils/request'

export function indexGetList() {
  return request({
    url: '/DeviceTypes',
    method: 'get'
  })
}

export function indexGetList1(page, limit) {
  return request({
    url: `/DeviceTypes/${page}&${limit}`,
    method: 'get'
  })
}

