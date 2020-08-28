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

