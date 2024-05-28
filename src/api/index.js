import request from '../util/request'
// 获取
export function getTotal() {
  return request({
    url: `/nevc/score/total`,
    method: 'get',
  })
}

export function getIncrease() {
  return request({
    url: `/nevc/score/increase`,
    method: 'get',
  })
}

export function getVehicle(pageSize, pageNum) {
  return request({
    url: `/nevc/vehicle/${pageSize}/${pageNum}`,
    method: 'get',
  })
}

export function getBlock() {
  return request({
    url: `nevc/block/latest`,
    method: 'get',
  })
}
