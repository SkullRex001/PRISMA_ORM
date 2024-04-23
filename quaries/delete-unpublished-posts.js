import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async ()=>{
    await prisma.user.update({
        where: {
            id : 1
        },

        data : {
            posts : {
                deleteMany : {
                    published : false
                }
            }
        }
    })
}

main().then(async ()=>{
    prisma.$disconnect()
}).catch(async (e)=>{
    console.log(e)
    prisma.$disconnect()

})