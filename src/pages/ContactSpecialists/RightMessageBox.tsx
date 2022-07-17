import { Avatar } from 'antd';
import User from '#/assets/images/user.png';

type RightMessageBoxProps = {
  content: string;
};

export default function RightMessageBox({ content }: RightMessageBoxProps) {
  return (
    <div className="flex items-end gap-4">
      <div className="w-[450px] rounded-t-xl rounded-bl-xl border-[1px] border-color-gray-50 p-4 shadow-xl">
        {content}
      </div>
      <Avatar src={User} size={50} />
    </div>
  );
}
