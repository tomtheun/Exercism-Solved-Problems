export function keep<T>(collection: Array<T>, predicate: ((x: T) => boolean)) {
  return filter(collection, (x: T) => predicate(x));
}

export function discard<T>(collection: Array<T>, predicate: ((x: T) => boolean)) {
  return filter(collection, (x: T) => !predicate(x));
}

function filter<T>(collection: Array<T>, predicate: ((x: T) => boolean)) {
  const filteredCollection: Array<T> = [];

  collection.forEach((item) => {
    if (predicate(item)) {
      filteredCollection.push(item);
    }
  });

  return filteredCollection;
}
