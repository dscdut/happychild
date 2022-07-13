import { Divider } from 'antd';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

interface Props {
  children: ReactNode;
}

export function PublicLayout({ children }: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex h-[5rem] items-center justify-between px-8 shadow-md">
        <Header />
      </div>
      <div className="h-screen px-8 py-4">{children}</div>
      <Divider className="bg-primary-color" />
      <div className="px-8 py-8">
        <Footer />
      </div>
    </div>
  );
}
