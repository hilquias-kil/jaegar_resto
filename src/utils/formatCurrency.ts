export function formatCurrency(
  value: number,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  });

  return formatter.format(value);
}
