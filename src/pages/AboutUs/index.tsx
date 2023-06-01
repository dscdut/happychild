import { HeartOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import React from 'react';

const AboutUs = () => {

  return (
    <>
      <div className="grid w-full justify-center lg:grid-cols-2">
        <div className="col-span-1">
          <h1 className="ml-[5rem] w-1/4 text-9xl font-bold lg:sticky lg:top-48 2xl:text-9xl ">
            Meet our team
          </h1>
        </div>
        <div className="col-span-1 lg:mr-[4rem] lg:mt-[4rem]">
          <iframe
            className="block w-full rounded-lg border-4 border-primary-color"
            width="885"
            height="498"
            src="https://www.youtube.com/embed/IV3NSE3jjyk"
            title="HappyChild - GDSC Solution Challenge 2023"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          {/* <iframe
            className="block w-full rounded-lg border-4 border-primary-color"
            width="885"
            height="498"
            src="https://www.youtube.com/embed/LDrhHYYUJsY"
            title="HappyChild - GDSC Solution Challenge 2023"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe> */}

          <div className="mt-20 mb-20 grid">
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
            <img
              className="mt-8"
              src="https://i.ibb.co/61C9NmB/Logo2-01.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
