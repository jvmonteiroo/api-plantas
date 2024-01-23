import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return [
      {
        name: "feijão",
        price: 2.50
      }
    ];
  }
}
