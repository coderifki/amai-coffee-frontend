export const removeEmptyKey = (obj: any) => {
  for (const key in obj) {
    if (
      obj[key] === null ||
      obj[key] === '' ||
      obj[key] === undefined ||
      obj[key] === 0
    ) {
      delete obj[key]
    }
  }
  return obj
}
