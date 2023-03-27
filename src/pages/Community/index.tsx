import { Card } from 'antd';
import Post from './Post';
import PostGroup, { PostGroupProps } from './PostGroup';

const firstItems: PostGroupProps['items'] = [
  {
    title: 'Discuss',
    thread: '16',
    message: '40',
    avatar: 'https://picsum.photos/200',
    hashtag: 'Discuss',
    hashtagColor: '#81CEED',
    date: '21/11/2021',
    subTitle: 'Emergency notification',
  },
  {
    title: 'Suggestions',
    thread: '2.7K',
    message: '47K',
    avatar: 'https://picsum.photos/200',
    hashtag: 'Suggestions',
    hashtagColor: '#ffb710',
    date: '21/11/2021',
    subTitle: 'A few suggestions',
  },
  {
    title: 'Question',
    thread: '16',
    message: '40',
    avatar: 'https://picsum.photos/200',
    hashtag: 'Question',
    hashtagColor: '#efa2a4',
    date: '21/11/2021',
    subTitle: 'Question about autism',
  },
];

const secondItems: PostGroupProps['items'] = [
  {
    title: 'Signs of autism',
    thread: '16',
    message: '40',
    avatar: 'https://picsum.photos/200',
    hashtag: 'Discuss',
    hashtagColor: '#81CEED',
    date: '21/11/2021',
    subTitle: 'A few signs...',
  },
  {
    title: 'Symptoms of Autism',
    thread: '2.7K',
    message: '47K',
    avatar: 'https://picsum.photos/200',
    hashtag: 'Feedback',
    hashtagColor: '#ffb710',
    date: '21/11/2021',
    subTitle: 'Potential symptoms...',
  },
  {
    title: 'Prevention',
    thread: '16',
    message: '40',
    avatar: 'https://picsum.photos/200',
    hashtag: 'Question',
    hashtagColor: '#efa2a4',
    date: '21/11/2021',
    subTitle: 'Prevention one ...',
  },
  {
    title: 'The first signs',
    thread: '2.7K',
    message: '47K',
    avatar: 'https://picsum.photos/200',
    hashtag: 'Susgesstion',
    hashtagColor: '#ffb710',
    date: '21/11/2021',
    subTitle: 'Common signs in...',
  },
  {
    title: 'How to fit in?',
    thread: '16',
    message: '40',
    avatar: 'https://picsum.photos/200',
    hashtag: 'Question',
    hashtagColor: '#efa2a4',
    date: '21/11/2021',
    subTitle: 'Is integration difficult?',
  },
];

function Community() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2 flex flex-col gap-8">
        <PostGroup title="Hall" items={firstItems} />
        <PostGroup title="Basic knowledges" items={secondItems} />
      </div>
      <div className="col-span-1">
        <Card
          className="sticky"
          style={{
            top: 'calc(5rem + 16px)',
          }}
        >
          <div className="text-lg text-primary-color">Recent Posts</div>
          <Post
            className="mt-4 cursor-pointer"
            image="https://picsum.photos/200"
            hashtag="Discuss"
            title="Làm sao để bớt tự kỷ hơn"
            description="Latest: Minh Nguyen 26 minutes ago"
            color="#81CEED"
          />
          <Post
            className="mt-4 cursor-pointer"
            image="https://picsum.photos/190"
            hashtag="Discuss"
            title="Con em nó phá quá các bác ơi"
            description="Latest: Kiem Tran 13 minutes ago"
            color="#81CEED"
          />
          <Post
            className="mt-4 cursor-pointer"
            image="https://picsum.photos/180"
            hashtag="Question"
            title="Làm sao để chồng bớt tự kỷ ạ"
            description="Latest: Quyen Nguyen 24 minutes ago"
            color="#efa2a4"
          />
          <Post
            className="mt-4 cursor-pointer"
            image="https://picsum.photos/170"
            hashtag="Discuss"
            title="Con mình đã vượt qua tự kỷ..."
            description="Latest: Thien Nguyen 34 minutes ago"
            color="#81CEED"
          />
          <Post
            className="mt-4 cursor-pointer"
            image="https://picsum.photos/160"
            hashtag="Question"
            title="Con mình đang có dấu..."
            description="Latest: Huy Truong 24 minutes ago"
            color="#efa2a4"
          />
        </Card>
      </div>
    </div>
  );
}

export default Community;
