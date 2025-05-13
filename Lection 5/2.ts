interface Form {
  readonly name: string;
  readonly email: string;
  readonly age: number;
}

type RenamedForm = {
  [K in keyof Form as `form${Capitalize<K>}`]: Form[K] extends string
    ? string
    : undefined;
};

export {};
