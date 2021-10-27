import ObliteratorIterator from './iterator';
import type {IntoInterator} from './types';

type MapFunction<S, T> = (item: S) => T;

export default function map<S, T>(
  predicate: MapFunction<S, T>,
  target: IntoInterator<S>
): ObliteratorIterator<T>;
