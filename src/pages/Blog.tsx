import { Card } from 'antd';
import { Link } from 'react-router-dom';

function BlogPage() {
  return (
    <div className="flex flex-col gap-8">
      <Card
        title="Default size card"
        extra={<Link to="/blogs/123">Detail</Link>}
        style={{ width: '100%' }}
      >
        <div className="flex flex-col gap-4">
          <div>
            <img
              src="https://picsum.photos/200/300"
              className="h-96 w-full object-cover object-center"
            />
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://picsum.photos/200/300"
              className="h-10 w-10 rounded-full object-cover object-center"
            />
            <div className="font-bold">User name</div>
          </div>
          <div className=" text-color-gray-40">Date: 22/2/2222</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quasi
            laudantium laborum ad reprehenderit iure consectetur. Ratione eum
            necessitatibus, natus reprehenderit aliquid itaque, libero, quo
            officia nihil exercitationem consequatur dolore!
          </p>
        </div>
      </Card>
      <Card
        title="Default size card"
        extra={<Link to="/blogs/123">Detail</Link>}
        style={{ width: '100%' }}
      >
        <div className="flex flex-col gap-4">
          <div>
            <img
              src="https://picsum.photos/200/300"
              className="h-96 w-full object-cover object-center"
            />
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://picsum.photos/200/300"
              className="h-10 w-10 rounded-full object-cover object-center"
            />
            <div className="font-bold">User name</div>
          </div>
          <div className=" text-color-gray-40">Date: 22/2/2222</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quasi
            laudantium laborum ad reprehenderit iure consectetur. Ratione eum
            necessitatibus, natus reprehenderit aliquid itaque, libero, quo
            officia nihil exercitationem consequatur dolore!
          </p>
        </div>
      </Card>
      <Card
        title="Default size card"
        extra={<Link to="/blogs/123">Detail</Link>}
        style={{ width: '100%' }}
      >
        <div className="flex flex-col gap-4">
          <div>
            <img
              src="https://picsum.photos/200/300"
              className="h-96 w-full object-cover object-center"
            />
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://picsum.photos/200/300"
              className="h-10 w-10 rounded-full object-cover object-center"
            />
            <div className="font-bold">User name</div>
          </div>
          <div className=" text-color-gray-40">Date: 22/2/2222</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quasi
            laudantium laborum ad reprehenderit iure consectetur. Ratione eum
            necessitatibus, natus reprehenderit aliquid itaque, libero, quo
            officia nihil exercitationem consequatur dolore!
          </p>
        </div>
      </Card>
    </div>
  );
}

export default BlogPage;
