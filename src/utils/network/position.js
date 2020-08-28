import request from '@/utils/request'

export function PositionGetList() {
  return request({
    url: '/PositionTypes',
    method: 'get'
  })
}

export function PositionGetList1(page, limit) {
  return request({
    url: `/PositionTypes/${page}&${limit}`,
    method: 'get'
  })
}

