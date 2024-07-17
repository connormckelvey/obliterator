/**
 * Obliterator Every Function
 * ==========================
 *
 * Function taking an iterable and a predicate and returning whether all
 * its items match the given predicate.
 */
import iter from'./iter.js';

/**
 * Every.
 *
 * @param  {Iterable} iterable  - Target iterable.
 * @param  {function} predicate - Predicate function.
 * @return {boolean}
 */
export default function every(iterable, predicate) {
  var iterator = iter(iterable);

  var step;

  while (((step = iterator.next()), !step.done)) {
    if (!predicate(step.value)) return false;
  }

  return true;
};
