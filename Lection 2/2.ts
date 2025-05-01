const READ = Symbol("read");
const WRITE = Symbol("write");
const UPDATE = Symbol("update");

type Operations = typeof READ | typeof WRITE | typeof UPDATE;