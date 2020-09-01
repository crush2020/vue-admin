import request from '@/utils/request'

export function installGetList() {
  return request({
    url: '/InstallationSites',
    method: 'get'
  })
}

export function installGetList1(page, limit) {
  return request({
    url: `/InstallationSites/${page}&${limit}`,
    method: 'get'
  })
}

export function installPostList(data) {
  return request({
    url: '/InstallationSites',
    method: 'post',
    data
  })
}

export function installPutList(id, data) {
  return request({
    url: `/InstallationSites/${id}`,
    method: 'put',
    data
  })
}

export function installDeleteList(id) {
  return request({
    url: `/InstallationSites/${id}`,
    method: 'delete'
  })
}
