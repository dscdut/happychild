import { CommentOutlined } from '@ant-design/icons';
import { Tag, Card, Divider } from 'antd';

export interface PostGroupProps {
  className?: string;
  title: string;
  items: {
    title: string;
    thread: string;
    message: string;
    avatar: string;
    hashtag: string;
    hashtagColor: string;
    date: string;
    subTitle: string;
  }[];
}

function PostGroup({ className = '', title, items }: PostGroupProps) {
  return (
    <Card className={className}>
      <div className="text-xl text-primary-color">{title}</div>

      <div>
        {items.map((item, index) => (
          <div key={index}>
            <Divider />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CommentOutlined className="text-2xl" />
                <div className="text-lg">{item.title}</div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center text-lg text-color-gray-40">
                  <div>Threads</div>
                  <div>{item.thread}</div>
                </div>
                <div className="flex flex-col items-center text-lg text-color-gray-40">
                  <div>Messages</div>
                  <div>{item.message}</div>
                </div>
                <Card>
                  <div className="flex cursor-pointer items-start gap-3">
                    <img src={item.avatar} className=" h-8 w-8 rounded-full" />
                    <div>
                      <div className="flex w-64 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                        <Tag color={item.hashtagColor}>{item.hashtag}</Tag>
                        <div className="text-lg underline">{item.subTitle}</div>
                      </div>
                      <div className="text-color-gray-40">{item.date}</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default PostGroup;
