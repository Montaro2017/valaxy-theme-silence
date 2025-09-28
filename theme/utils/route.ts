import type { ComputedRef } from 'vue'
import type { LocationQueryValue, RouteLocationNormalizedLoaded } from 'vue-router'
import { computed } from 'vue'

export function getFirstQuery(route: RouteLocationNormalizedLoaded, key: string): ComputedRef<LocationQueryValue> {
  return computed(() => {
    const query = route.query[key]
    if (!query) {
      return null
    }
    if (Array.isArray(query)) {
      return query[0]
    }
    return query
  })
}

export function getFirstParam(route: RouteLocationNormalizedLoaded, key: string): ComputedRef<LocationQueryValue> {
  return computed(() => {
    const param = route.params[key]
    if (!param) {
      return null
    }
    if (Array.isArray(param)) {
      return param[0]
    }
    return param
  })
}
