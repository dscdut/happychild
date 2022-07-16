import { Image } from 'antd';
import HappyChild from '#/assets/images/happychild.jpg';

export function Footer() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Image width={150} src={HappyChild} />
      </div>
      <div>Content</div>
      <div>Content</div>
    </div>
  );
}
