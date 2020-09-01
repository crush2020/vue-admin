import request from '@/utils/request'

export function workGetList() {
  return request({
    url: '/WorkingFaces',
    method: 'get'
  })
}

export function workGetList1(page, limit) {
  return request({
    url: `/WorkingFaces/${page}&${limit}`,
    method: 'get'
  })
}

export function workPostList(data) {
  return request({
    url: '/WorkingFaces',
    method: 'post',
    data
  })
}

export function workPutList(id, data) {
  return request({
    url: `/WorkingFaces/${id}`,
    method: 'put',
    data
  })
}

export function workDeleteList(id) {
  return request({
    url: `/WorkingFaces/${id}`,
    method: 'delete'
  })
}
