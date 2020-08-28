import request from '@/utils/request'

export function positionGetList() {
  return request({
    url: '/PositionTypes',
    method: 'get'
  })
}

export function positionGetList1(page, limit) {
  return request({
    url: `/PositionTypes/${page}&${limit}`,
    method: 'get'
  })
}

