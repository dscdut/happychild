# Structure

This style guide is mostly based on the standards that are currently prevalent in JavaScript. Let's discuss if you have better idea on how to improve it.

```
├── __tests__
│   ├── e2e     # forder to e2e test 
│   ├── intergration # forder to integration test 
│   ├── utils   # forder to utils test
│   │   ├── components 
│   │   │   ├── Form.spec.tsx
│   │   ├── hooks
│   │   │   ├── useMemo.spec.ts
│   │   ├── utils
│   │   │   ├── date.spec.ts
├── src
│   ├── assets          # folder to store assets
│   │   ├── svgs    # folder to svgs
│   │   └── images      # folder to images
│   ├── configs          # folder to configs
│   │   ├── locales    # folder to locales
│   │   └── theme      # folder to theme
│   │   ├── antd.ts    # forder to config antd
│   │   └── ...
│   ├── generated   # folder for generated files, please ignore it 
│   ├── graphql   # folder to add all mutations and queries
│   │   ├── user
│   │   │   └── queries
│   │   │      └── user.graphql
│   │   │   └── mutations
│   │   │   └── fragments
│   │   ├── cache.ts   # folder to config cache 
│   │   └── client.tsx  # folder to config file client
│   ├── pages          # folder to store all the pages
│   │   └── account
│   │   │   ├── components
│   │   │   │   └── Account.tsx
│   │   │   ├── hooks
│   │   │   │   └── useAccount.ts
│   │   │   └── utils
│   │   │   └── index.tsx
│   │   └── ...
│   ├── shared          # folder to shared
│   │   ├── components
│   │   │   └── Commmon
│   │   │       └── Loading.tsx
│   │   │   └── Form
│   │   │       └── EditForm.tsx
│   │   │   └── Layout
│   │   │       └── PrivateLayout.tsx
│   │   │   └── Modal # store all modal here
│   │   │       └── ManageUserModal.tsx
│   │   │   └── Selector  # store all selector here
│   │   │       └── UserSelector.tsx
│   │   ├── hooks
│   │   ├── i18n
│   │   ├── routes
│   │   ├── utils
│   │   └── ...
│   └── App.tsx      # App entry point
│   └── main.tsx     # main entry point
├── .gitignore
├── package.json
└── README.md
└── yarn.lock
└── ...
```
