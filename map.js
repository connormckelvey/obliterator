/**
 * Obliterator Map Function
 * ===========================
 *
 * Function returning a iterator mapping the given iterator's values.
 */
import Iterator from './iterator.js';
import iter from './iter.js';

/**
 * Map.
 *
 * @param  {Iterator} target - Target iterable.
 * @param  {function} mapper - Map function.
 * @return {Iterator}
 */
export default function map(target, mapper) {
  var iterator = iter(target);

  return new Iterator(function next() {
    var step = iterator.next();

    if (step.done) return step;

    return {
      value: mapper(step.value)
    };
  });
};
