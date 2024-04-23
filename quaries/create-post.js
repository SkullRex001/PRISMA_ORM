import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log : ['info' , 'query']})

const main = async ()=>{
    await prisma.post.create({
        data : {
            title : "Title of post",
            content : "This is the content of the post",
            published : true,
            author : {
                connect : {
                    id : 1
                }
            }
        }
    })

    console.log('post has been created')
}

main().then(async()=>{
    prisma.$disconnect()

}).catch(async(e)=>{
    console.log(e)
    prisma.$disconnect()

})