import { LeftBar, RightBar } from '@/components/Layout';

interface LayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const Layout = ({ children, modal }: LayoutProps) => {
  return (
    <div className='mx-auto flex max-w-screen-xl justify-between'>
      <div className='px-8'>
        <LeftBar />
      </div>
      <div className='min-w-[600px] flex-1 border-x-[1px] border-gray-400'>
        {children}
        {modal}
      </div>
      <div className='mx-8 flex flex-1'>
        <RightBar />
      </div>
    </div>
  );
};

export default Layout;
