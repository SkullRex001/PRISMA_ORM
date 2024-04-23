import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async ()=>{
    const updatedUsers = await prisma.user.update({
        where: {
            id : 1
        },
        data : {
            name : 'Bikku Babu'
        }
    })
    console.log('Updayted Users :-' ,updatedUsers )

}

main().then(async ()=>{
    prisma.$disconnect()
}).catch(async (e)=>{
    console.log(e)
    prisma.$disconnect()

})