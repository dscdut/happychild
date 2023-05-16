import { HeartOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import React from 'react';

const AboutUs = () => {

  return (
    <>
      <div className="w-full">
        <div className="sm:sticky sm:block hidden sm:top-24 sm:ml-24 w-1/3 max-w-md sm:pt-24">
          <h1 className="text-9xl  2xl:text-9xl font-bold">Meet our team</h1>
          <h2 className="text-blue-300 mt-5 text-3xl font-light"></h2>
        </div>
        <div
          className="sm:ml-[35rem] 2xl:ml-0 sm:mr-40 sm:w-7/12 sm:-mt-[30rem]">
          <iframe className='border-4 block border-primary-color sm:w-[53rem] w-[20rem] rounded-lg' width="885" height="498" src="https://www.youtube.com/embed/LDrhHYYUJsY" title="HappyChild - GDSC Solution Challenge 2023" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          
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
          </div>
          
          <img
             className="mt-8 sm:ml-[6rem] "
            src="https://i.ibb.co/61C9NmB/Logo2-01.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
