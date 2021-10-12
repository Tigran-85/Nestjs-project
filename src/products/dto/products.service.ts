import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './create-product.dto';
import { UpdateProductDto } from './update.product.dto';


@Injectable()
export class ProductsService {
    private products: CreateProductDto[] = []

    public getAll() {
        return this.products
    }

    public getById(id: string){
        return this.products.find(product => product.id === id)
    }

    public create(productDto: CreateProductDto) {
        const isExist = this.products.filter(product => product.title === productDto.title);

        if (isExist && isExist.length > 0) {
            return {
                message: "Title already exist",
                data: []
            };
        }

        this.products.push({
            ...productDto,
            id: Date.now().toString()
        });
        return {
            message: "Data added",
            data: this.products
        }

    }

    public delete(id: string) {
        this.products.forEach((product, index) => {
            if (product.id === id) {
                this.products.splice(index, 1)
            }
        });

        return {
            message: "User is deleted",
            data: this.products
        };
    }

    public update(id: string, payload: UpdateProductDto) {
        this.products.map(product => {
            if (product.id === id) {
                product.title = payload.title;
                product.price = payload.price
            }
        })
    }
}