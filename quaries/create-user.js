import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async ()=>{

    await prisma.user.create({
        data:{
            email : 'honestaditya@gmail.com',
            name : 'aditya vikram singh'
        }
    })

    console.log('User has been created')

}


main().then(async ()=>{
    await prisma.$disconnect()
}).catch(async (e)=>{
    console.log(e)
    await prisma.$disconnect()
})