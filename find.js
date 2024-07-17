/**
 * Obliterator Find Function
 * ==========================
 *
 * Function taking an iterable and a predicate and returning the first item
 * matching the given predicate.
 */
import iter from './iter.js';

/**
 * Find.
 *
 * @param  {Iterable} iterable  - Target iterable.
 * @param  {function} predicate - Predicate function.
 * @return {boolean}
 */
export default function find(iterable, predicate) {
  var iterator = iter(iterable);

  var step;

  while (((step = iterator.next()), !step.done)) {
    if (predicate(step.value)) return step.value;
  }

  return;
};
