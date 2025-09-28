import type { ComputedRef } from 'vue'
import { computed, toValue } from 'vue'

export function useThemePagination<T>(list: T[] | ComputedRef<T[]>, pageNum: number | ComputedRef<number>, pageSize: number | ComputedRef<number>, filter?: (item: T) => boolean): ComputedRef<{ total: number, list: T[] }> {
  return computed(() => {
    const filteredList = filter ? toValue(list).filter(filter) : toValue(list)
    const total = filteredList.length
    const start = (toValue(pageNum) - 1) * toValue(pageSize)
    const end = start + toValue(pageSize)
    const displayList = filteredList.slice(start, end)
    return {
      total,
      list: displayList,
    }
  })
}
