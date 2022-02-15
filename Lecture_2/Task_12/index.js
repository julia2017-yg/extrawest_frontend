export const createPrevArgSaver = (args = []) => {
  return function(arg) {
    args.push(arg);
    return args[args.length - 2];
  };
}