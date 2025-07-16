function createCounter(n: number): () => number {
  return function () {
    n++;
    return n - 1;
  };
}
