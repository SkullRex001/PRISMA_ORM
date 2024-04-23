import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async ()=>{
    const res = await prisma.post.findMany({
        take : 2,
        skip : 0
    })

    console.log(res)
}

main().then(async ()=>{
    prisma.$disconnect()
}).catch(async (e)=>{
    console.log(e)
    prisma.$disconnect()

})