import { selectUser } from "@/store/slices/user";
interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <div>{children}</div>;
}
