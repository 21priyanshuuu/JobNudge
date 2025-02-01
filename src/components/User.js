import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const User = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const name = user.given_name;

  console.log(user);
  return <div>{name}</div>;
};

export default User;
