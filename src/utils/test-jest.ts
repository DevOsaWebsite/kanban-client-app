export const sum = (arr: number[]): number => {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sum(arr.slice(1));
};
