export function calcularHorasDesde(dataISO: string): number {
  const dataInicial = new Date(dataISO).getTime()
  const agora = Date.now()

  const diferencaMs = agora - dataInicial
  const horas = diferencaMs / (1000 * 60 * 60)

  return Math.floor(horas)
}
