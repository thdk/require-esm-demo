# Demo application using nestjs (commonjs) which imports got (esm module)

This applicaiton requires node 22.12.0 or higher.

```sh
npm install
npx nx serve
```

```json
{
  "//": "package.json",
  "...": "...",
  "type": "commonjs",
  "dependencies": {
    "...": "...",
    "got": "^14.4.5"
  },
  "devDependencies": {
    "...": "...",
    "typescript": "5.8.0-beta"
  },
  "overrides": {
    "typescript": "5.8.0-beta"
  },
  "engines": {
    "node": ">=22.12.0"
  }
}
```

```json
{
  "//": "tsconfig.json",
  "compilerOptions": {
    "...": "...",
    "moduleResolution": "nodenext",
    "module": "NodeNext"
  },
  "...": "..."
}
```

```ts
// app.service.ts
import { Injectable } from '@nestjs/common';

import got from 'got'; // <-- importing esm module

@Injectable()
export class AppService {
  async getData() {
    return await got.get('https://dummyjson.com/test').json<{
      status: string;
      method: string;
    }>();
  }
}
```
