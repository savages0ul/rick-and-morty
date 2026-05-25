type ClassValue = string | Record<string, unknown> | undefined | null | false;

export const cn = (...args: ClassValue[]): string => {
  const classes: string[] = [];

  for (const arg of args) {
    if (!arg) continue;
    if (typeof arg === 'string') {
      classes.push(arg);
    } else {
      for (const key in arg) {
        if (arg[key]) classes.push(key);
      }
    }
  }

  return classes.join(' ');
};
