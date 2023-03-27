import { HeartOutlined } from '@ant-design/icons';
import React from 'react';

const AboutUs = () => {
  const videoURL = 'http://techslides.com/demos/sample-videos/small.mp4';
  return (
    <>
      <div className="w-full">
        <div className="sticky top-24 ml-24 w-1/3 max-w-md pt-24">
          <h1 className="text-9xl  2xl:text-9xl font-bold">Meet our team</h1>
          <h2 className="text-blue-300 mt-5 text-3xl font-light"></h2>
        </div>
        <div
          className="ml-[35rem] 2xl:ml-0 mr-40 w-7/12"
          style={{
            marginTop: '-33rem',
          }}
        >
          <img
            className="brightness-50"
            src="https://images.pexels.com/photos/1756665/pexels-photo-1756665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="mt-20 mb-20">
            <div className="mx-5 my-5 text-3xl text-primary-color">
              Yesterday is a history. Tomorrow is a mystery. Only today is a
              gift, that's why it's called present
            </div>
            <div className="mx-5 my-5 text-justify text-xl">
              Our team is excited to introduce our web platform that supports
              testing for children with autism. We understand that testing can
              be a stressful and overwhelming experience for children with
              autism and their families, and our goal is to provide a supportive
              and comfortable environment. Our platform is designed to provide
              tailored assessments that meet the unique needs of each child,
              helping to identify their strengths and challenges. Our team is
              committed to creating a user-friendly experience that makes
              testing less intimidating and more accessible. We're proud to
              offer a product that supports children with autism and their
              families on their journey towards growth and success.
              <HeartOutlined
                className="text-color-accent-pink"
                style={{ fontSize: '30px' }}
              />
            </div>
          </div>

          <img
            className="mt-3"
            src="https://images.pexels.com/photos/1198171/pexels-photo-1198171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
