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
                    <Link to="/blogs/123">Chi tiết</Link>
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
              Chuẩn đoán tự kỷ như thế nào?
            </p>
            <p>
              Việc chuẩn đoán tự kỷ nên được thực hiện bởi các sĩ chuyên khoa,
              thông qua một loạt các hoạt động, các quan sát và các bài kiểm tra
              được thiết kế dành riêng để thăm dò và chuẩn đoán có độ chính xác
              cao.
            </p>
            <p className="text-primary-color underline">Đọc trong 10 phút</p>
          </Card>
          <Card>
            <p className="cursor-pointer text-lg text-primary-color">
              Có những phương pháp nào giúp trẻ tự kỷ hòa nhập?
            </p>
            <p>
              Trẻ tự kỷ có thể sống một cuộc sống bình thường nếu đươc phát hiện
              sớm các bất thường và tham gia an thiệp trị liệu kịp thời.
            </p>
            <p className="text-primary-color underline">Đọc trong 3 phút</p>
          </Card>
          <Card>
            <p className="cursor-pointer text-lg text-primary-color">
              Trẻ tự kỷ thường có những triệu chứng nào?
            </p>
            <p>
              Thời gian xuất hiện triệu chứng: 12 - 18 thàng tuổi - giai đoạn
              này, các triệu chứng dần trở nên rỡ rệt và dễ nhận biết nhất. Nếu
              được phát hiện kịp thời, cơ hội can thiệp sớm mang lại kết quả tốt
              rất cao.
            </p>
            <p className="text-primary-color underline">Đọc trong 7 phút</p>
          </Card>
        </div>
      </div>
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div className="text-2xl text-primary-color">
            Các bài viết nâng cao
          </div>
          <Button>Xem tất cả</Button>
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
                      <Link to="/blogs/123">Chi tiết</Link>
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
