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
