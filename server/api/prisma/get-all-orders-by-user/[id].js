import { PrismaClient } from '@prisma/client'
import { read } from 'fs';
const prisma = new PrismaClient();


export default defineEventHandler( async (e) => {
   let orders = await prisma.orders.findFirst({
      where: {userId: e.context.params.userId },
      orderBy: { id: "desc" },
      include: {
         orderItem: {
            include: {
               product: true
            }
         }
      }
   })

   return orders;
})