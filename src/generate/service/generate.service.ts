import { Injectable } from '@nestjs/common';

@Injectable()
export class GenerateService {
    create(body){
      const object ={
        body,
        "name": "aldry"
      }
      return object
      }
}
