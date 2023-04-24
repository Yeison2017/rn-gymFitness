// genera un nuevo objeto con las mismas propiedades y valores que el objeto de entrada
export function generateObjectFonts<T>(obj: T): T {
  const newObj = {} as T;
  for (let prop in obj) {
    newObj[prop] = obj[prop];
  }
  return newObj;
}
