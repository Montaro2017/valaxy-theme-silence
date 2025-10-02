import type { CategoryList, dayjs, Post } from 'valaxy'
import type { ComputedRef } from 'vue'
import type { LocationQueryValue, RouteLocationNormalizedLoaded } from 'vue-router'
import { isCategoryList } from 'valaxy'
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
    return route.params[key] as string
  })
}

export function getIndexLink(page?: number) {
  return `/${page ? `?page=${page}` : ''}`
}

export function getTagLink(tag: string, page?: number) {
  return `/tag/${tag}${page ? `?page=${page}` : ''}`
}

export function getCategoryLink(category: string | CategoryList, page?: number) {
  if (isCategoryList(category)) {
    return `/category/${category.name}${page ? `?page=${page}` : ''}`
  }
  return `/category/${category}${page ? `?page=${page}` : ''}`
}

export function getPostLink(post: Post) {
  return post.path
}

export function getArchiveLink(archive: [string, { id: string, date: dayjs.Dayjs, posts: Post[] }]) {
  return `/archives#${archive[1].id}`
}
