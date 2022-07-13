import { Card, Col, Input, Row } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Courses() {
  const [data, setData] = useState<[]>([]);

  const fetchData = async () => {
    const result = await axios('https://jsonplaceholder.typicode.com/posts');
    setData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Row gutter={[24, 24]}>
      <Col span={2} className="bg-primary-color">
        Navbar
      </Col>
      <Col span={22}>
        <Row gutter={16}>
          <Input placeholder="search program" className="mb-8" />
          {data.map(i => (
            <Col key={i} span={8} className="mb-2">
              <Card>
                <div className="mb-5 text-3xl">
                  Signs and Symptoms of Autism Spectrum Disorder
                </div>
                <div className="mb-2">
                  Autism spectrum disorder (ASD) is a developmental disability
                  caused by differences in the brain. People with ASD often have
                  problems with social communication and interaction, and
                  restricted or repetitive behaviors or interests. People with
                  ASD may also have different ways of learning, moving, or
                  paying attention. It is important to note that some people
                  without ASD might also have some of these symptoms. But for
                  people with ASD, these characteristics can make life very
                  challenging.
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default Courses;
