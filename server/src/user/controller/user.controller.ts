import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get()
    findAll(): any {
        return { status: "I'm working as expected" };
    }
}
