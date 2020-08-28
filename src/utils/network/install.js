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

