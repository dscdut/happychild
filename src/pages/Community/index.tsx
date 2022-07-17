import { Card } from 'antd';
import Post from './Post';
import PostGroup, { PostGroupProps } from './PostGroup';

const firstItems: PostGroupProps['items'] = [
  {
    title: 'Thảo luận',
    thread: '16',
    message: '40',
    avatar: 'https://picsum.photos/200',
    hashtag: 'Thảo luận',
    hashtagColor: '#81CEED',
    date: '21/11/2021',
    subTitle: 'Thông báo khẩn',
  },
  {
    title: 'Góp ý',
    thread: '2.7K',
    message: '47K',
    avatar: 'https://picsum.photos/200',
    hashtag: 'Góp ý',
    hashtagColor: '#ffb710',
    date: '21/11/2021',
    subTitle: 'Một vài góp ý',
  },
  {
    title: 'Thắc mắc',
    thread: '16',
    message: '40',
    avatar: 'https://picsum.photos/200',
    hashtag: 'Thắc mắc',
    hashtagColor: '#efa2a4',
    date: '21/11/2021',
    subTitle: 'Thắc mắc về tự kỷ',
  },
];

const secondItems: PostGroupProps['items'] = [
  {
    title: 'Dấu hiệu tự kỷ',
    thread: '16',
    message: '40',
    avatar: 'https://picsum.photos/200',
    hashtag: 'Thảo luận',
    hashtagColor: '#81CEED',
    date: '21/11/2021',
    subTitle: 'Một vài dấu hiệu đ...',
  },
  {
    title: 'Các triệu chứng tự kỷ',
    thread: '2.7K',
    message: '47K',
    avatar: 'https://picsum.photos/200',
    hashtag: 'Góp ý',
    hashtagColor: '#ffb710',
    date: '21/11/2021',
    subTitle: 'Triệu chứng tiềm tàng...',
  },
  {
    title: 'Cách phòng chống',
    thread: '16',
    message: '40',
    avatar: 'https://picsum.photos/200',
    hashtag: 'Thắc mắc',
    hashtagColor: '#efa2a4',
    date: '21/11/2021',
    subTitle: 'Phòng chống một ...',
  },
  {
    title: 'Các dấu hiệu đầu tiên',
    thread: '2.7K',
    message: '47K',
    avatar: 'https://picsum.photos/200',
    hashtag: 'Góp ý',
    hashtagColor: '#ffb710',
    date: '21/11/2021',
    subTitle: 'Dấu hiệu phổ thông ở...',
  },
  {
    title: 'Làm sao để hoà nhập',
    thread: '16',
    message: '40',
    avatar: 'https://picsum.photos/200',
    hashtag: 'Thắc mắc',
    hashtagColor: '#efa2a4',
    date: '21/11/2021',
    subTitle: 'Hoà nhập liệu có khó',
  },
];

function Community() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2 flex flex-col gap-8">
        <PostGroup title="Đại sảnh" items={firstItems} />
        <PostGroup title="Kiến thức phổ thông" items={secondItems} />
      </div>
      <div className="col-span-1">
        <Card
          className="sticky"
          style={{
            top: 'calc(5rem + 16px)',
          }}
        >
          <div className="text-lg text-primary-color">Bài viết gần đây</div>
          <Post
            className="mt-4 cursor-pointer"
            image="https://picsum.photos/200"
            hashtag="Thảo luận"
            title="Làm sao để bớt tự kỷ hơn"
            description="Latest: Minh Nguyễn 26 phút trước"
            color="#81CEED"
          />
          <Post
            className="mt-4 cursor-pointer"
            image="https://picsum.photos/190"
            hashtag="Thảo luận"
            title="Con em nó phá quá các bác ơi"
            description="Latest: Kiệm Trần 13 phút trước"
            color="#81CEED"
          />
          <Post
            className="mt-4 cursor-pointer"
            image="https://picsum.photos/180"
            hashtag="Thắc mắc"
            title="Làm sao để chồng bớt tự kỷ ạ"
            description="Latest: Quyên Nguyễn 24 phút trước"
            color="#efa2a4"
          />
          <Post
            className="mt-4 cursor-pointer"
            image="https://picsum.photos/170"
            hashtag="Thảo luận"
            title="Con mình đã vượt qua tự kỷ..."
            description="Latest: Thiên Nguyễn 34 phút trước"
            color="#81CEED"
          />
          <Post
            className="mt-4 cursor-pointer"
            image="https://picsum.photos/160"
            hashtag="Thắc mắc"
            title="Con mình đang có dấu..."
            description="Latest: Huy Trương 24 phút trước"
            color="#efa2a4"
          />
        </Card>
      </div>
    </div>
  );
}

export default Community;
