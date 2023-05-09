import { Divider } from 'antd';
import { ReactNode } from 'react';
import Footer from './Footer';
import  Header  from './Header';

interface Props {
  children: ReactNode;
}

export function PublicLayout({ children }: Props) {
  return (
    <div className="relative flex flex-col">
      <div className="fixed z-50 flex h-[5rem] w-full items-center justify-between bg-[white] shadow-md">
        <Header />
      </div>
      <div className="mt-[5rem] min-h-screen px-8 py-4">{children}</div>
      {/* <Divider className="bg-primary-color" /> */}
      <div className="mt-10 overflow-x-hidden ">
        <Footer />
      </div>
    </div>
  );
}
