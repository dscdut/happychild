import { RightOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Typography,
  Image,
  Radio,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Store } from 'antd/lib/form/interface';
import { ref, push, onValue } from 'firebase/database';
import { SetStateAction, useEffect, useState } from 'react';
import { realTimeDatabase, auth } from '../../../shared/utils/firebase';
import Children from '#/assets/images/children.jpg';
import { DatePicker } from '#/shared/components/DatePicker';
import SelectedRegisteredChild from './SelectRegisteredChild';

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 0;
  }
`;

export default function Assessment() {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [registeredChildren, setRegisteredChildren] = useState<any>([]);

  // check if user has already register a child before
  useEffect(() => {
    const childrenRef = ref(
      realTimeDatabase,
      `children/${auth.currentUser?.uid}`,
    );
    onValue(childrenRef, async snapshot => {
      if (snapshot.exists()) {
        const childrenObj = await snapshot.val();

        const childrenArray = Object.keys(childrenObj).map(key => {
          return {
            ...childrenObj[key],
            id: key,
          };
        });

        setRegisteredChildren(childrenArray);
      }
    });
  }, []);

  const onSubmit = (values: Store) => {
    const birthday = values.birthday.format('YYYY-MM-DD');
    const { kindergartenName } = values;
    if (kindergartenName === undefined) {
      values.kindergartenName = '';
    }
    const data = {
      info: {
        ...values,
        birthday,
      },
    };

    const newChildId = push(
      ref(realTimeDatabase, `children/${auth.currentUser?.uid}`),
      data,
    );

    navigate(`/assessment/start/${newChildId.key}`);
  };

  const calculateAgeInMonths = (birthday: string) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const ageInMonths = today.getFullYear() - birthDate.getFullYear();

    return ageInMonths * 12 + monthDiff;
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <StyledCard className="w-[50rem] shadow-md">
        <Form onFinish={onSubmit}>
          <Col span={24}>
            <Image src={Children} className="rounded-t-2xl" preview={false} />
          </Col>
          <Row gutter={[16, 16]} className="p-4">
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-2xl font-bold text-primary-color">
                Please accurately fill in the child’s information for the system
                to conduct an evaluation
              </Typography>
              <Typography className="text-xs font-bold italic text-error-color">
                * The information entered here is not for commercial purposes.
                The system will record the information to collect additional
                data for improving the evaluation system.
              </Typography>
            </Col>
            {registeredChildren.length > 0 && (
              <Col span={24} className="flex flex-col gap-2">
                <Typography className="text-xl text-success-color">
                  You have already registered your children. Click{' '}
                  <span
                    onClick={() => {
                      setIsModalVisible(true);
                    }}
                    className="cursor-pointer font-semibold"
                    style={{ color: '#00A86B' }}
                  >
                    here
                  </span>{' '}
                  to retake the assessment for your children.{' '}
                  <span className="text-primary-color">
                    Or register a new one:
                  </span>
                </Typography>
                <SelectedRegisteredChild
                  registeredChildren={registeredChildren}
                  isModalVisible={isModalVisible}
                  setIsModalVisible={setIsModalVisible}
                />
              </Col>
            )}
            <Col span={24} className="mt-4 flex flex-col gap-2">
              <Typography className="text-base">
                The child’s full name. (
                <span className="text-error-color">*</span>):
              </Typography>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter the child’s full name.',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <Input placeholder="Enter the child’s full name." />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Typography className="text-base">
                    Baby’s Birthdate (
                    <span className="text-error-color">*</span>):
                  </Typography>
                  <Form.Item
                    name="birthday"
                    validateFirst={true}
                    rules={[
                      {
                        required: true,
                        message: 'Please select Baby’s Birthdate',
                      },
                      {
                        validator: (_, value) => {
                          const ageInMonths = calculateAgeInMonths(
                            value.format('YYYY-MM-DD'),
                          );

                          // check if age is between 0 and 72 months
                          if (ageInMonths < 0 || ageInMonths > 72) {
                            return Promise.reject(
                              'The child’s age must be between 0 and 72 months',
                            );
                          }

                          return Promise.resolve();
                        },
                      },
                    ]}
                    style={{ marginBottom: 0 }}
                  >
                    <DatePicker
                      className="w-full"
                      placeholder="Select Baby’s Birthdate"
                    />
                  </Form.Item>
                </Col>
                <Col span={12} className="flex flex-col justify-start gap-2">
                  <Typography className="text-base">
                    Sender (<span className="text-error-color">*</span>):
                  </Typography>
                  <Form.Item
                    name="gender"
                    rules={[
                      {
                        required: true,
                        message: 'Please seltect Baby’s Gender',
                      },
                    ]}
                    style={{ marginBottom: 0 }}
                  >
                    <Radio.Group>
                      <Row align="middle" gutter={[16, 16]}>
                        <Col>
                          <Radio value={true}>Male</Radio>
                        </Col>
                        <Col>
                          <Radio value={false}>Female</Radio>
                        </Col>
                      </Row>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">
                Parent/Guardian’s Permanent Address (
                <span className="text-error-color">*</span>):
              </Typography>
              <Form.Item
                name="addressOfParents"
                rules={[
                  {
                    required: true,
                    message: 'Please Enter Permanent Address',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <Input placeholder="Enter Permanent Address" />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">
                Parent/Guardian’s Phone Number (
                <span className="text-error-color">*</span>):
              </Typography>
              <Form.Item
                name="phoneNumberOfParents"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Parent/Guardian’s Phone Number',
                  },
                  {
                    pattern: /^0[0-9]{9,10}$/,
                    message: 'Invalid Phone Number',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <Input placeholder="Enter Phone Number" />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">
                Baby was born in which week of pregnancy? (
                <span className="text-error-color">*</span>)
              </Typography>
              <Form.Item
                name="weekOfPregnancy"
                rules={[
                  {
                    required: true,
                    message: 'Please enter week of pregnancy',
                  },
                  {
                    pattern: /^[0-9]{1,2}$/,
                    message: 'Invalid week of pregnancy',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <InputNumber
                  className="w-full"
                  placeholder="Enter week of pregnancy"
                />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">
                Is the baby currently attending any kindergarten? (
                <span className="text-error-color">*</span>)
              </Typography>
              <Form.Item
                name="isGoingToKindergarten"
                rules={[
                  {
                    required: true,
                    message: 'Please select Yes or No',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <Radio.Group>
                  <Row align="middle" gutter={[16, 16]}>
                    <Col>
                      <Radio value={true}>Yes</Radio>
                    </Col>
                    <Col>
                      <Radio value={false}>No</Radio>
                    </Col>
                  </Row>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">
                If yes, please enter the name of the kindergarten the baby is
                attending:
              </Typography>
              <Form.Item noStyle name="kindergartenName">
                <Input placeholder="Enter kindergarten name" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Typography className="text-sm italic">
                * If you have any questions, please contact our hotline:
                0935573483
              </Typography>
            </Col>
            <Col span={24} className="flex items-center justify-end">
              <Button type="primary" htmlType="submit">
                Start assessment <RightOutlined />
              </Button>
            </Col>
          </Row>
        </Form>
      </StyledCard>
    </div>
  );
}
