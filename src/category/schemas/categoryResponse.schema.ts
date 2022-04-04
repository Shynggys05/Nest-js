import { ApiProperty } from '@nestjs/swagger';

export class CategoryResponseSchema {
    @ApiProperty({
        type: String,
        example: "Phones",
        minLength: 1,
    })
    title: string;
}
