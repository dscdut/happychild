import { LinkOutlined } from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';

export default function Introduction() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24} className="flex flex-col gap-2">
        <Typography className="text-lg font-bold">1. What is ASQ?</Typography>
        <Typography className="ml-4">
          <strong>ASQ (Ages and Stages Questionnaires)</strong> - is a system of
          questions for parents/caregivers to complete in order to screen and
          monitor the comprehensive development of children from 1 month to 6
          years old. It is based on early detection of developmental delays in
          children and was developed and refined by experts at the University of
          Oregon, USA for over 40 years.
        </Typography>
        <Typography className="ml-4">
          ASQ-3 is considered the gold standard for developmental screening for
          children. ASQ-3 has been developed in many languages, including a
          Vietnamese version with easy-to-understand and easy-to-implement
          wording.
        </Typography>
        <Typography className="ml-4">
          ASQ screens and monitors 5 areas of child development: communication,
          gross motor, fine motor, problem-solving, and personal-social.
        </Typography>
      </Col>
      <Col span={24} className="flex flex-col gap-2">
        <Typography className="text-lg font-bold">
          2. How long does it take to complete ASQ-3?
        </Typography>
        <Typography className="ml-4">
          It takes about 10-15 minutes for parents or caregivers to complete the
          screening questionnaire.
        </Typography>
        <Typography className="ml-4">
          The scoring is processed and performed by the system.
        </Typography>
      </Col>
      <Col span={24} className="flex flex-col gap-2">
        <Typography className="text-lg font-bold">
          3. Is ASQ-3 easy to use?
        </Typography>
        <Typography className="ml-4">
          The ASQ-3 questionnaire is written in plain language and is
          illustrated for easy understanding. Each questionnaire includes:
          <Typography className="ml-4">
            - Clear and easy-to-understand instructions.
          </Typography>
          <Typography className="ml-4">
            - 30 simple questions for 5 areas with 6 activities each.
          </Typography>
          <Typography className="ml-4">
            - Screening results that include scores for each area and overall
            observations.
          </Typography>
        </Typography>
      </Col>
      <Col span={24} className="flex flex-col gap-2">
        <Typography className="text-lg font-bold">
          4. How do parents participate in ASQ-3?
        </Typography>
        <Typography className="ml-4">
          ASQ-3 relies on parents observing their child and completing
          questionnaires to assess their abilities.
        </Typography>
        <Typography className="ml-4">
          Completing the questionnaire also helps parents better understand
          their child.
        </Typography>
      </Col>
      <Col span={24} className="flex flex-col gap-2">
        <Typography className="text-lg font-bold">
          5. ASQ-3 instructions:
        </Typography>
        <Typography className="ml-4">
          For each activity, mark the box:
        </Typography>
        <Typography className="ml-8">
          - YES (if the child performs regularly),
        </Typography>
        <Typography className="ml-8">
          - NO (if the child has not yet performed the activity).
        </Typography>
        <Typography className="ml-4">
          You need to let the child try each activity before you mark the box.
        </Typography>
        <Typography className="ml-4">
          Complete this questionnaire as a fun game for you and your child.
        </Typography>
        <Typography className="ml-4">
          Make sure that the child is rested, well-fed and ready to participate
          with you.
        </Typography>
      </Col>
      <Col span={24} className="flex flex-col gap-2">
        <Typography className="text-lg font-bold">
          6. See more details about ASQ-3:
        </Typography>
        <Typography className="ml-4">
          <a
            href="http://www.bestkc.com/wp-content/uploads/2017/05/3-year-ASQ-ENGLISH.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <LinkOutlined /> Details about ASQ-3
          </a>
        </Typography>
      </Col>
    </Row>
  );
}
