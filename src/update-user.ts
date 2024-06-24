import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    await prisma.user.update({
        where:{
            id:1
        },
        data:{
            email:"newankan@gmail.com",
        }
    })
}

main();

// async function main(){
//     await prisma.post.update({
//         where:{
//             id:1
//         },
//         data:{
//             published:true,
//         }
//     })
// }