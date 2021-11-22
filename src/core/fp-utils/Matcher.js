const matched = (x) => ({
  on: () => matched(x),
  otherwise: () => x,
});

/**
 * This pattern will replace swith-case with a functional pattern
 * @param x
 * @returns {{otherwise: (function(*): *), on: (function(*, *): *)}}
 * @constructor
 */
const Matcher = (x) => ({
  on: (predicat, fn) => (predicat(x) ? matched(fn(x)) : Matcher(x)),
  otherwise: (fn) => fn(x),
});

export default Matcher;
