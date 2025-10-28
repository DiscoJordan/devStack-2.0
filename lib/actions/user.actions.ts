"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { string } from "zod";

interface UserByIdProps {
  userId: string;
}

export async function getUserById({ userId }: UserByIdProps) {
  try {
    connectToDatabase();

    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error) {
    throw error;
  }
}
