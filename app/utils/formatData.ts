export function formatarDataEvento(isoDate: string): string {
  const data = new Date(isoDate)

  const dia = data.getUTCDate()
  const ano = data.getUTCFullYear()

  const meses = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ]

  const mes = meses[data.getUTCMonth()]

  return `${dia} ${mes}, ${ano}`
}
