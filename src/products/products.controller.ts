import { Controller, Delete, Get, Param, Post, Put, Body, Redirect, HttpCode, HttpStatus, Header, Req, Res } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { Response, Request } from 'express'
import { ProductsService } from './dto/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {
  }

  @Get()
  // @Redirect('https://google.com', 301)
  getAll() {
    return this.productService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id) {
      return this.productService.delete(id)
  }

  @Put(':id')
  update(@Body() updatePorductDto: UpdateProductDto, @Param('id') id: string) {
      return this.productService.update(id, updatePorductDto)
  }
}
