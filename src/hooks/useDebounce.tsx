type AnyFunction = (...args: any[]) => void;

const useDebounce = <T extends AnyFunction>(callback: T, delay: number, immediate: boolean = false): T => {
  let timeout: number | null = null;

  return function(this: any, ...args: Parameters<T>): void {
    const context = this;
    const callNow = immediate && !timeout;

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) {
        callback.apply(context, args);
      }
    }, delay);

    if (callNow) {
      callback.apply(context, args);
    }
  } as T;
}

export default useDebounce;