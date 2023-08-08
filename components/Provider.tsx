"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { FC } from "react";

const Provider: FC<SessionProviderProps> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
