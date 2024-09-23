import { AnyFunction } from 'utils';

const useThrottle = <T extends AnyFunction>(callback: T, delay: number, immediate: boolean = false): T => {
  let lastRun = Date.now();

  return function(this: any, ...args: Parameters<T>): void {
    const context = this;
    const callNow = immediate;

    if (Date.now() - lastRun >= delay) {
      callback.apply(context, args);
      lastRun = Date.now();
    }

    if (callNow) {
      callback.apply(context, args);
    }
  } as T;
};

export default useThrottle;