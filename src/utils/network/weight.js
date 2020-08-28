import request from '@/utils/request'

export function weightGetList() {
  return request({
    url: '/WeightedSetViews',
    method: 'get'
  })
}

export function weightGetList1(page, limit) {
  return request({
    url: `/WeightedSetViews/${page}&${limit}`,
    method: 'get'
  })
}

