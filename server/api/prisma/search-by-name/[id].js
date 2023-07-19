import { PrismaClient } from '@prisma/client'
import { read } from 'fs';
const prisma = new PrismaClient();


export default defineEventHandler( async (e) => {
   let items = await prisma.products.findmany({
      take: 5,// Max rows
      where: {
         title: {
            contains: e.context.params.id,
            mode: 'insensitive'
         }
      }
   })

   return items
})