import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    return this.appService.getHello();
  }

  @Post()
  inserir(@Body() body){
    return body.name
  }
  
  @Delete(":id")
  deletar(@Param() param){
    return `o registro ${param.id} foi deletado com sucesso`
  }
}
