import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createNewUser (username:string,password:number,firstName:string,lastName:string){
    const user = await prisma.newUsers.create({data:{username,password,firstName,lastName}});
    console.log("User created successfully!",user);
}

createNewUser("ankan@12",1234567890,"Ankan","Das");
