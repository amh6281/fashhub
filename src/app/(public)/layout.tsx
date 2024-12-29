interface LayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const Layout = ({ children, modal }: LayoutProps) => {
  return (
    <>
      {children}
      {modal}
    </>
  );
};

export default Layout;
