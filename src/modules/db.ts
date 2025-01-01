import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log:['query','info','warn','error']
})

const User = prisma.user;

export { User };

export default prisma;