import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main (){
    await prisma.user.create({
        data:{
            email:"ankan@gmail.com",
            name:"ankan das"
        }
    })
}

main()
.then(async()=>{
    console.log("Done with the query");
    await prisma.$disconnect();
})
.catch(async (err)=>{
    console.log(err);
    await prisma.$disconnect();
})