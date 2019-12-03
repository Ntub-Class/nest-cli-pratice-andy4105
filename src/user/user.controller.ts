import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

@Controller('user')
export class UserController {

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
