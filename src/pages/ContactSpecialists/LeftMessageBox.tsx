import { Avatar } from 'antd';
import User from '#/assets/images/user.png';

type LeftMessageBoxProps = {
  content: string;
};

export default function LeftMessageBox({ content }: LeftMessageBoxProps) {
  return (
    <div className="flex items-end gap-4">
      <Avatar src={User} size={50} />
      <div className="w-[450px] rounded-t-xl rounded-br-xl border-[1px] border-color-gray-50 bg-secondary-color p-4 text-[white] shadow-xl">
        {content}
      </div>
    </div>
  );
}
