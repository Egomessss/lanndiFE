export function isFunction(
  value: any,
):
  value is Function {
  return typeof value === 'function';
}

export function noop() {
}


