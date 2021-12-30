import { Injectable } from '@nestjs/common';

@Injectable()
export class GenerateService {
    create(body){
        console.log('teste')
        return body 
      }
}
