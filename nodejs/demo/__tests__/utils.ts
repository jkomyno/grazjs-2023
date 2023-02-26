export function toPromise<T>(callable: () => T): Promise<T> {
  return new Promise((resolve, reject) => {
    try {
      const result = callable()
      resolve(result)
    } catch (error) {
      reject(error)
    }
  })
}
