/**
 * Obliterator Chain Function
 * ===========================
 *
 * Variadic function combining the given iterables.
 */
import Iterator from './iterator.js';
import iter from './iter.js';

/**
 * Chain.
 *
 * @param  {...Iterator} iterables - Target iterables.
 * @return {Iterator}
 */
export default function chain() {
  var iterables = arguments;
  var current = null;
  var i = -1;

  /* eslint-disable no-constant-condition */
  return new Iterator(function next() {
    var step = null;

    do {
      if (current === null) {
        i++;

        if (i >= iterables.length) return {done: true};

        current = iter(iterables[i]);
      }

      step = current.next();

      if (step.done === true) {
        current = null;
        continue;
      }

      break;
    } while (true);

    return step;
  });
};
