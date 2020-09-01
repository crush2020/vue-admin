import request from '@/utils/request'

export function function3GetList() {
  return request({
    url: '/AnalysisViews',
    method: 'get'
  })
}

export function function3GetList1(page, limit) {
  return request({
    url: `/AnalysisViews/${page}&${limit}`,
    method: 'get'
  })
}

export function function3PostList(data) {
  return request({
    url: '/AnalysisSettings',
    method: 'post',
    data
  })
}

export function function3PutList(id, data) {
  return request({
    url: `/AnalysisSettings/${id}`,
    method: 'put',
    data
  })
}

export function function3PostList1(data) {
  return request({
    url: '/AnalysisConditions',
    method: 'post',
    data
  })
}

export function function3PutList1(id, data) {
  return request({
    url: `/AnalysisConditions/${id}`,
    method: 'put',
    data
  })
}

export function function3DeleteList1(id) {
  return request({
    url: `/AnalysisConditions/${id}`,
    method: 'delete'
  })
}
