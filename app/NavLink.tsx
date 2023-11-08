interface NavLinkProps {
  children: React.ReactNode;
}

export default function NavLink({ children }: NavLinkProps) {
  return <li className="uppercase text-xs tracking-widest">{children}</li>;

  type NavLinkProps = {
    children: React.ReactNode;
  };
}
