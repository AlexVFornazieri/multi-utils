import copyToClipboard from './copyToClipboard'
import checkCnpj from './checkCnpj'
import checkCpf from './checkCpf'
import slugify from './slugify'
import arraySearch from './arraySearch'

export function planeObject (data) {
  return JSON.parse(JSON.stringify(data))
}

export function dateString (date) {
  return date.toISOString().split('T')[0]
}

export function getPeriodLast (days = 30) {
  const now = new Date()
  const end = dateString(now)
  const before = new Date(now.setDate(now.getDate() - days))
  const start = dateString(before)
  return { start, end }
}

/**
* Get YouTube ID from various YouTube URL
* @author: takien
* @url: http://takien.com
*/
export function getYoutubeId (url) {
  let ID = ''
  url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)
  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_-]/i)
    ID = ID[0]
  } else {
    ID = url
  }
  return ID
}

export function getCurrentURI () {
  const actualHost = window.location.protocol + '//' + window.location.hostname + (window.location.hostname === 'localhost' ? (':' + window.location.port) : '')
  return actualHost
}

export function getUrlParam (name) {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(name)
}

export {
  arraySearch,
  copyToClipboard,
  checkCnpj,
  checkCpf,
  slugify,
}
