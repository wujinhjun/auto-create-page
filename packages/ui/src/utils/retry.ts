export default function retryFn<T>(
  fn: () => Promise<T>,
  maxCount = 3,
  interval = 1000
): Promise<T> {
  let count = 0;
  const errors: unknown[] = [];

  return new Promise((resolve, reject) => {
    const basicFn = async () => {
      try {
        const res = await fn();
        resolve(res);
      } catch (err) {
        errors.push(err);

        if (count < maxCount) {
          count++;
          setTimeout(basicFn, interval);
        } else {
          const errorStacks = errors.reduce((stack, error) => {
            return `${stack}\n${error}`;
          }, ``);

          const errorCombined = new Error(
            `Failed after ${maxCount} retries: ${errorStacks}`
          );
          reject(errorCombined);
        }
      }
    };

    basicFn();
  });
}
