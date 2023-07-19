import { PrismaClient } from '@prisma/client'
import { read } from 'fs';
const prisma = new PrismaClient();


export default defineEventHandler( async (e) => {
   const body = await readBody(e);

   const address = await prisma.addresses.create({
      userId: body.userId,     
      name: body.name,     
      address: body.address,   
      zipcode: body.zipCode,    
      city: body.city,      
      country: body.country
   })

   return address
})