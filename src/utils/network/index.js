import request from '@/utils/request'

export function getList() {
  return request({
    url: '/DeviceTypes',
    method: 'get'
  })
}

export function getList1(page, limit) {
  return request({
    url: `/DeviceTypes/${page}&${limit}`,
    method: 'get'
  })
}

