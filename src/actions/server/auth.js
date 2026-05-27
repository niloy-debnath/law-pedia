"use server";
import bcrypt from "bcryptjs";

import { dbConnect } from "@/lib/dbConnect";

export const postUser = async (payload) => {
  //   console.log(payload);

  //   already resgister
  const isExist = await (
    await dbConnect("users")
  ).findOne({ email: payload.email });

  if (isExist) {
    return {
      success: false,
      message: `user alreay exist`,
    };
  }
  const hashPassword = await bcrypt.hash(payload.password, 10);
  console.log(hashPassword);

  // new user creation
  const newUser = {
    ...payload,
    role: "user",
    password: hashPassword,
  };

  // push to database
  const result = await (await dbConnect("users")).insertOne(newUser);
};
