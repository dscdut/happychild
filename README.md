<p align="center">
  <a href="https://nextjs.org">
    <h1 align="center">Smartos Web Super admin</h1>
  </a>
</p>

## Built With

- [React.js](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Ant Design](https://ant.design/)

## Getting Started

### Prerequisites

- Install node
  <https://nodejs.org/en/download/>

- Install yarn

  ```sh
  npm install --global yarn
  ```

### Installation

1. Clone the repo

   ```sh
   git clone git@bitbucket.org:geotechgroupservices/linked-office-web.git
   ```

2. Install NPM packages

   ```sh
   yarn install
   ```

3. Copy `.env.example` to `.env` and update the variables.

4. Run the development server:

   ```bash
   #npm run dev
   nvm use 17.0.1
   export NODE_OPTIONS=--openssl-legacy-provider; npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Testing

##### Unit test

```
yarn test
```

##### Integration test

```
yarn run test-integration
```

##### e2e test

```
yarn run test-e2e
```

## Documentations

- [Development style guides](docs/style-guide.md)

- [Project Structure](docs/folder-structure.md)
