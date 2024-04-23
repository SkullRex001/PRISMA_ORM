import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async ()=>{
    const allUsers = await prisma.user.findMany({});
    console.log('All-Users :-' ,allUsers )

    const uniqueUser = await prisma.user.findUnique({
        where: {
            id : 1
        },

        include : {
            posts : true
        }
        
    })

    console.log('Unique User :--' , uniqueUser)



}

main().then(async ()=>{
    prisma.$disconnect()
}).catch(async (e)=>{
    console.log(e)
    prisma.$disconnect()

})