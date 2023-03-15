import { Tag } from 'antd';

interface PostProps {
  className?: string;
  image: string;
  hashtag: string;
  title: string;
  description: string;
  color: string;
}

function Post({
  className = '',
  image,
  hashtag,
  title,
  description,
  color,
}: PostProps) {
  return (
    <div className={className}>
      <div className="flex items-start gap-2">
        <img src={image} className="h-8 w-8 rounded-full" />
        <div>
          <div className="flex items-start">
            <Tag color={color}>{hashtag}</Tag>
            <div className="text-lg hover:text-primary-color">{title}</div>
          </div>
          <div className="text-color-gray-50">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
