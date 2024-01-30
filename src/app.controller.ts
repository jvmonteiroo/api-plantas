import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("plant-types")
  getPlantTypes(): object {
    return [
      {
        name: "Imbé",
        image:"imbe",
      },
      {
        name: "Peperomia",
        image: "peperomia",
      },
      {
        name: "Aningapara",
        image: "aningapara",
      },
      {
        name: "Yucca",
        image:"yucca",
      },
      {
        name: "Espada de São Jorge",
        image: "espada",
      },
      {
        name: "Zamioculca",
        image: "zamioculca",
      },
    ]
  }

  @Get("plant-types/:id")
  getById()
  {
    return {
      name: "Zamioculca",
      image: "zamioculca",
    }
  }

  @Get("plant-places")
  getPlantPlaces(){
    return ["Sala", "Cozinha", "Garagem", "Quarto", "Sala2"]
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
