import { Controller, Body, Post, Get, Param, Put, Delete } from '@nestjs/common';

@Controller('student')
export class StudentController {

    @Get()
    getnews(){
        return 'ok';
    }

    @Get(':id')
    getonenews(@Param('id') id){
        return 'ok';
    }

    @Post()
    postnews(@Body() body){
        return 'OK';
    }

    @Put(':id')
    putnews(@Body() body,@Param() id){
        return 'ok';
    }

    @Delete(':id')
    deletenews(@Param('id') id){
        return 'OK';
    }
}
