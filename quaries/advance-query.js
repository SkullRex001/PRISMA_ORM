import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async ()=>{
    const res = await prisma.user.findMany({
        where:{
            email : {
                endsWith : 'gmail.com'
            },
            posts : {
                some : {
                    published : true
                }
            }
        },

        include : {

            posts : {
                where : {
                    published : true
                }
            }

        }
    })

    console.log(res)
}

main().then(async()=>{
    prisma.$disconnect()

}).catch(async(e)=>{
    console.log(e)
    prisma.$disconnect()

})