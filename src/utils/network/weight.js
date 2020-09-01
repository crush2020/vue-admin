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

export function weightPostList(data) {
  return request({
    url: '/WeightedSets',
    method: 'post',
    data
  })
}

export function weightPutList(id, data) {
  return request({
    url: `/WeightedSets/${id}`,
    method: 'put',
    data
  })
}

export function weightDeleteList(id) {
  return request({
    url: `/WeightedSets/${id}`,
    method: 'delete'
  })
}
