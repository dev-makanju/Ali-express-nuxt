import { PrismaClient } from '@prisma/client'
import { read } from 'fs';
const prisma = new PrismaClient();


export default defineEventHandler( async (e) => {
   const body = await readBody(e);

   const order = await prisma.orders.create({
      userId: body.userId,
      stripeId: body.stripeId,     
      name: body.name,      
      address: body.address,   
      zipcode: body.zipcode,   
      city: body.city,      
      country: body.country,
   })

   body.create.forEach( prod => {
      await prisma.orderItem.create({
         data: {
            orderId: order.id,
            productId: Number(prod.id)
         }
      })
   });

   return order
})