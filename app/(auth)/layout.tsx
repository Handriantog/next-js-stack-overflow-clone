import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-auth-light dark:bg-auth-dark flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-10">
      {children}
    </main>
  );
};

export default AuthLayout;
