import request from '@/utils/request'

export function getList() {
  return request({
    url: '/DeviceTypes',
    method: 'get'
  })
}
