import { Injectable } from '@nestjs/common';

import got from 'got';

@Injectable()
export class AppService {
  async getData() {
    return await got.get('https://dummyjson.com/test').json<{
      status: string;
      method: string;
    }>();
  }
}
