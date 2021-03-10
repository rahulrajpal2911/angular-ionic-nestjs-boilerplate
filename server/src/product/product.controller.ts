import { Controller, Get } from '@nestjs/common';

@Controller('product')
export class ProductController {

    @Get()
    findAll(): any {
        return { status: "Product working as expected" };
    }
}
