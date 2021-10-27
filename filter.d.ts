import ObliteratorIterator from './iterator';
import type {IntoInterator} from './types';

type PredicateFunction<T> = (item: T) => boolean;

export default function filter<T>(
  target: IntoInterator<T>,
  predicate: PredicateFunction<T>
): ObliteratorIterator<T>;
