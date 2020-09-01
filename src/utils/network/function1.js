import request from '@/utils/request'

export function function1GetList() {
  return request({
    url: '/AlarmLevelViews',
    method: 'get'
  })
}

export function function1GetList1(page, limit) {
  return request({
    url: `/AlarmLevelViews/${page}&${limit}`,
    method: 'get'
  })
}

export function function1PostList(data) {
  return request({
    url: '/AlarmLevels',
    method: 'post',
    data
  })
}

export function function1PutList(id, data) {
  return request({
    url: `/AlarmLevels/${id}`,
    method: 'put',
    data
  })
}

export function function1DeleteList(id) {
  return request({
    url: `/AlarmLevels/${id}`,
    method: 'delete'
  })
}

