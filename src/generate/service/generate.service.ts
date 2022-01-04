import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { throwError } from 'rxjs';
import { GenerateDto } from '../dto/generate.dto';

@Injectable()
export class GenerateService {
    generateTokenDevPreprodWincoz(generateDto : GenerateDto){
      const {apiway, credential} = generateDto
      return this.validationBodyHas(apiway,credential)
    }
    

    validationBodyHas(apiway,credential){
      if(apiway !=  "wincoz.server-dev-preprod-token" || credential != "b550331cf6b7be6320e87f1d9e4ead632534d04e08b6857b15290fabad166169") throw new Error("Erro credential");
      return {message: "ok"}
    }
}
