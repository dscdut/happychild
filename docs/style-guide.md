# Web Development Style Guide

This style guide is mostly based on the standards that are currently prevalent in JavaScript. Let's discuss if you have better idea on how to improve it.

## Table of Contents

- [Web Development Style Guide](#linked-superadmin-development-style-guide)
  - [Table of Contents](#table-of-contents)
  - [Functional Component](#functional-component)
  - [Naming](#naming)
  - [String literals](#string-literals)
    - [Use single quotes](#use-single-quotes)
    - [Template literals](#template-literals)
  - [Date Fetching](#date-fetching)
  - [References:](#references)

## Functional Component

Defining Functional Component instead of using React.FC<>.

```
// prefer
const Greeting = ({ name }: GreetingProps) => {
  return <h1>Hello {name}</h1>
};

// less prefer
const Greeting:FC<GreetingProps> = ({ name }) => {
  return <h1>Hello {name}</h1>
};
```

## Naming

- Component folder and filename: Use PascalCase for folder and filenames.

  ```
  // good
  /ForgotPassword/ForgotPassword.tsx

  // bad
  /forgotPassword/forgotPassword.tsx
  ```

- Non-component folder and filename: Use dash `-` instead of underscore `_` as seperator.

  ```
  // good
  /forgot-password/forgot-password.service.ts

  // bad
  /forgot_password/forgot_password.service.ts
  ```

- Local variable name: Use camel case

  ```
  // good
  const isPaymentCompleted = true;
  let isPaymentCompleted = true;

  // bad
  const is_payment_completed = true;
  let ispaymentcompleted = true;
  ```

- Constant variable name: Use all upper cases separate by underscore \_

  ```
  // good
  const MIN_FILE_SIZE_IN_KB = 1000 * 1;

  // bad
  const minFileSize = 1000 * 1;
  ```

- interface name: Do NOT prefix with I

  ```
  // goood
  interface SomeObject = {};

  // bad
  interface ISomeObject = {};
  ```

## String literals

### Use single quotes

Ordinary string literals are delimited with single quotes ('), rather than double quotes (").

### Template literals

Use template literals (delimited with `) over complex string concatenation, particularly if multiple string literals are involved. Template literals may span multiple lines.

## Date Fetching

Use `useQuery` of Apollo Client whenever applicable instead of fetch.

## References

For more best practices and conventions.

- [Airbnb React/JSX Style Guide](https://airbnb.io/javascript/react/#basic-rules)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
