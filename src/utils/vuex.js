import Vue from 'vue'

export const set = property => (store, payload) => {
  if (property.includes('.')) {
    const [index, key] = property.split('.')
    Vue.set(store[index], key, payload)
  } else {
    Vue.set(store, property, payload)
  }
}

export const toggle = property => (store) => {
  Vue.set(store, property, !store[property])
}
