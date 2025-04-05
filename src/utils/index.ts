export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function formatPrice(price: number) {
  return price.toLocaleString("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 2,
  });
}
