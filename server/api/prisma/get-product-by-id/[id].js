import { PrismaClient } from '@prisma/client'
import { read } from 'fs';
const prisma = new PrismaClient();


export default defineEventHandler( async (e) => {
   let products = await prisma.products.findFirst({
      where: {id: Number(e.context.params.id)}
   })

   return products;
})