/**
 * Comprueba si la fecha que le pasamos es de hace más de un día
 */
export const isOutdated = timestamp => {
  const oneday = 60 * 60 * 24 * 1000 // milisegundos en 1 día
  const now = Date.now();
  return now - timestamp > oneday;
}
