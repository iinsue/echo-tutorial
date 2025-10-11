"use client";

import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";

import { AuthLayout } from "../layouts/auth-layout";
import { SignInView } from "../views/sign-in-view";

interface Props {
  children: React.ReactNode;
}

// 접근 제한 설정
export const AuthGuard = ({ children }: Props) => {
  return (
    <>
      <AuthLoading>
        <AuthLayout>
          <p>Loading...</p>
        </AuthLayout>
      </AuthLoading>

      <Authenticated>{children}</Authenticated>

      <Unauthenticated>
        <AuthLayout>
          <SignInView />
        </AuthLayout>
      </Unauthenticated>
    </>
  );
};
