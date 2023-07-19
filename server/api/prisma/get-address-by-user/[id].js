import { PrismaClient } from '@prisma/client'
import { read } from 'fs';
const prisma = new PrismaClient();


export default defineEventHandler( async (e) => {
   let res = await prisma.addresses.findFirst({
      where: { userId: e.context.params.id }
   })

   return res;
})