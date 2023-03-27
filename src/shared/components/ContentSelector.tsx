import { Select, SelectProps } from 'antd';

const options = [
  {
    label: 'What is delayed development in children?',
    value: 1,
  },
  {
    label:
      'Why is it important to monitor and screen for developmental delays?',
    value: 2,
  },
  {
    label: 'What can I do to monitor my child’s development?',
    value: 3,
  },

  {
    label:
      'Professional questionnaires used to assess developmental delays, speech delays, and autism in children',
    value: 4,
  },
  {
    label:
      'If your child is identified as being at risk for developmental delays or autism, what should you do',
    value: 5,
  },
];

export default function ContentSelector({ ...rest }: SelectProps) {
  return <Select options={options} {...rest} />;
}
