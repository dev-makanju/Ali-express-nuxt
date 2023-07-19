import { PrismaClient } from '@prisma/client'
import { read } from 'fs';
const prisma = new PrismaClient();


export default defineEventHandler( async (e) => {
   const body = await readBody(e);

   const res = await prisma.addresses.update({
      where: {id: Number(e.context.params.id)},
      data: {
         name: body.name,
         address: body.address,
         zipcode: body.zipCode,
         city: body.city,
         country: body.country
      }
   })

   return res;
})