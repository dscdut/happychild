import { CalendarOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Button, Card } from 'antd';
import { getDatabase, onValue, ref } from 'firebase/database';
import { Link } from 'react-router-dom';

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
}

function BlogPage() {
  const [blogList, setBlogList] = useState<Blog[]>([]);
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, 'blog');
    onValue(starCountRef, snapshot => {
      const data = snapshot.val();
      setBlogList(data);
    });
  }, []);

  return (
    <div className="mt-6 columns-3 gap-8">
      {blogList.length > 0 &&
        blogList.map(blog => (
          <Card
            key={blog.id}
            headStyle={{
              fontWeight: 600,
            }}
            title={blog.title}
            extra={
              <Button type="primary">
                <Link to="/blogs/123">Chi tiết</Link>
              </Button>
            }
            style={{ width: '100%', marginBottom: 38 }}
          >
            <div className="flex flex-col gap-4">
              <div>
                <img
                  src={blog.image}
                  className="h-60 w-full object-cover object-center"
                />
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://picsum.photos/200/300"
                  className="h-10 w-10 rounded-full object-cover object-center"
                />
                <div className="font-bold">Nguyễn Châu Quang Minh</div>
              </div>
              <div className="text-color-gray-40">
                <CalendarOutlined /> 22/2/2021
              </div>
              <p className=" h-32">{blog.description}</p>
            </div>
          </Card>
        ))}
    </div>
  );
}

export default BlogPage;
