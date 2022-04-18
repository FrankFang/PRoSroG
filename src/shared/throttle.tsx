export const throttle = <T extends ((...args: unknown[]) => any)>(fn: T, time: number) => {
  let timer: number | undefined = undefined
  let result: ReturnType<T>
  return (...args: Parameters<T>) => {
    if (timer) {
      return result
    } else {
      result = fn(...args)
      timer = setTimeout(() => {
        timer = undefined
      }, time)
      return result
    }
  }
}