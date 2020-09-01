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

export function indexPostList(data) {
  return request({
    url: '/DeviceTypes',
    method: 'post',
    data
  })
}

export function indexPutList(id, data) {
  return request({
    url: `/DeviceTypes/${id}`,
    method: 'put',
    data
  })
}

export function indexDeleteList(id) {
  return request({
    url: `/DeviceTypes/${id}`,
    method: 'delete'
  })
}
