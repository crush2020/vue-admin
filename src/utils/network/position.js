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

export function positionPostList(data) {
  return request({
    url: '/PositionTypes',
    method: 'post',
    data
  })
}

export function positionPutList(id, data) {
  return request({
    url: `/PositionTypes/${id}`,
    method: 'put',
    data
  })
}

export function positionDeleteList(id) {
  return request({
    url: `/PositionTypes/${id}`,
    method: 'delete'
  })
}

