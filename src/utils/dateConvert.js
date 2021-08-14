// @ts-check

/**
 * ## getShortDate
 * Convert ISO string to formatted date.
 * ### Notes
 * * For current year, formatted date doesn't contain it.
 * * For past years, formatted date contains that year.
 * 
 * ### Usage
 * ```
 * getShortDate('2018-04-06T00:12:00.000Z')
 * ```
 * ### Type Info
 * @param { string } isoString - ISO string like `'2018-04-06T00:12:00.000Z'`.
 * @return { string } Formatted string like `'6 Apr 2018'`, `'6 Apr'`.
 */
export function getShortDate(isoString) {
  const currentDateInstance = new Date();
  const currentYear = currentDateInstance.getFullYear();

  const dateInstance = new Date(isoString);
  const month = dateInstance.toLocaleString('en', { month: 'short' });
  const year = dateInstance.getFullYear();
  const date = dateInstance.getDate();

  const actualYear = currentYear === year ? '' : ` ${year}`;

  return `${date} ${month}${actualYear}`;
}
