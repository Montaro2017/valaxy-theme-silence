import type { Post } from 'valaxy'
import type { ComputedRef } from 'vue'
import { dayjs } from 'valaxy'
import { computed } from 'vue'
import { useAllPosts } from './theme'

export function useArchives(): ComputedRef<Map<string, {
  id: string
  date: dayjs.Dayjs
  posts: Post[]
}>> {
  return computed(() => {
    const postList = useAllPosts().value
    const map = new Map<string, { id: string, date: dayjs.Dayjs, posts: Post[] }>()
    for (const post of postList) {
      const date = dayjs(post.date).format('YYYY年MM月')
      if (!map.has(date)) {
        map.set(date, {
          id: `date-${dayjs(post.date).format('YYYYMM')}`,
          date: dayjs(post.date),
          posts: [],
        })
      }
      map.get(date)?.posts.push(post)
    }
    return map
  })
}
