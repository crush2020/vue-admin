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

export function managePostList(data) {
  return request({
    url: '/DeviceInformations',
    method: 'post',
    data
  })
}

export function managePutList(id, data) {
  return request({
    url: `/DeviceInformations/${id}`,
    method: 'put',
    data
  })
}

export function manageDeleteList(id) {
  return request({
    url: `/DeviceInformations/${id}`,
    method: 'delete'
  })
}
