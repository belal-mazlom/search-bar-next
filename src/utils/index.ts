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

/**
 * Creates a debounced function that delays invoking the provided function
 * until after `wait` milliseconds have elapsed since the last time it was invoked.
 *
 * @param func The function to debounce
 * @param wait The number of milliseconds to delay
 * @param immediate If true, trigger the function on the leading edge instead of the trailing edge
 * @returns A debounced version of the original function
 */
export function debounce<Args extends unknown[], R>(
  func: (...args: Args) => Promise<R> | R,
  wait: number,
  immediate: boolean = false
): (...args: Args) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (this: ThisParameterType<typeof func>, ...args: Args): void {
    const later = (): void => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    };

    const callNow = immediate && !timeout;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(this, args);
    }
  };
}
