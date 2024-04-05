"use server"

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function createONRampTransaction(amount: number, provider: string){
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;
    if(!userId){
        return{
            msg: "user not logged in"
        }
    }
    await prisma.onRampTransaction.create({
        data: {
            amount,
            provider,
            status: 'Processing',
            startTime: new Date(),
            userId: Number(userId),
            token: Math.random().toString(),
        }
    })
}