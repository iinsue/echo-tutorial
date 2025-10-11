import { AuthGuard } from "@/modules/auth/ui/components/auth-guard";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <AuthGuard>{children}</AuthGuard>;
};

export default Layout;
