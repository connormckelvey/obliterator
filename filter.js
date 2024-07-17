/**
 * Obliterator Filter Function
 * ===========================
 *
 * Function returning a iterator filtering the given iterator.
 */
import Iterator from './iterator.js';
import iter from './iter.js';

/**
 * Filter.
 *
 * @param  {Iterable} target    - Target iterable.
 * @param  {function} predicate - Predicate function.
 * @return {Iterator}
 */
export default function filter(target, predicate) {
  var iterator = iter(target);
  var step;

  return new Iterator(function () {
    do {
      step = iterator.next();
    } while (!step.done && !predicate(step.value));

    return step;
  });
};
