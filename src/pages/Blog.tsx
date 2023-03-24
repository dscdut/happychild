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
    <div>
      <div className="mt-6 grid grid-cols-12 gap-8">
        <div className="col-span-9 flex flex-wrap gap-8">
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
                    <Link to="/blogs/123">Detail</Link>
                  </Button>
                }
                style={{ width: '48%', marginBottom: 38 }}
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
        <div className="col-span-3 flex flex-col gap-8">
          <Card>
            <p className="cursor-pointer text-lg text-primary-color">
              How is autism diagnosed?
            </p>
            <p>
              The diagnosis of autism should be made by specialists, through a
              series of activities, observations and tests designed specifically
              for high-precision exploration and diagnosis.
            </p>
            <p className="text-primary-color underline">Read in 10 minutes</p>
          </Card>
          <Card>
            <p className="cursor-pointer text-lg text-primary-color">
              What methods are available to help children with autism integrate?
            </p>
            <p>
              Children with autism can live a normal life if abnormalities are
              detected early and intervention is timely.
            </p>
            <p className="text-primary-color underline">Read in 3 minutes</p>
          </Card>
          <Card>
            <p className="cursor-pointer text-lg text-primary-color">
              What symptoms do children with autism often have?
            </p>
            <p>
              Time to appear symptoms: 12 - 18 months old - this stage, the
              symptoms gradually become obvious and most recognizable. If
              detected in time, the chance of early intervention is very high.
            </p>
            <p className="text-primary-color underline">Read in 7 minutes</p>
          </Card>
        </div>
      </div>
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div className="text-2xl text-primary-color">Advanced Articles</div>
          <Button>View all</Button>
        </div>
        <div className="grid grid-cols-8 gap-4">
          {blogList.length > 0 &&
            blogList.map((blog, index) =>
              index < 4 ? (
                <Card
                  key={blog.id}
                  headStyle={{
                    fontWeight: 600,
                  }}
                  title={blog.title}
                  extra={
                    <Button type="primary">
                      <Link to="/blogs/123">Detail</Link>
                    </Button>
                  }
                  className="col-span-2"
                >
                  <div className="flex flex-col gap-4">
                    <div>
                      <img
                        src={blog.image}
                        className="h-36 w-full object-cover object-center"
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
                    <p className="h-32">{blog.description}</p>
                  </div>
                </Card>
              ) : null,
            )}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
