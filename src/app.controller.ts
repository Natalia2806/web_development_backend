import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import path from 'path';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get(':id/code/:code_user')
  getHello(@Param ('id') id:number, @Param ('code_user') code: string ): string {
    console.log('El parametro Id es', id);
    console.log('El parametro code es', code);
    return this.appService.getHello();
  }

  @Post(':id')
  postData(@Param('id') id: number, @Body()data:any): string {
    console.log("Por el body se envia data",data);
    return 'Buenas tardes';
  }
}
