export function getShortDate(isoString) {
  const currentDateInstance = new Date();
  const currentYear = currentDateInstance.getFullYear();

  const dateInstance = new Date(isoString)
  const month = dateInstance.toLocaleString('default', { month: 'short' });
  const year = dateInstance.getFullYear();
  const date = dateInstance.getDate();

  const actualYear = currentYear === year ? '' : ` ${year}`;

  return `${date} ${month}${actualYear}`;
}
