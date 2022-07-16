import { Select, SelectProps } from 'antd';

const options = [
  {
    label: 'Chậm phát triển ở trẻ nhỏ là gì?',
    value: 1,
  },
  {
    label: 'Vì sao cần theo dõi và sàng lọc phát triển lại quan trọng?',
    value: 2,
  },
  {
    label: 'Để theo dõi sự phát triển của trẻ tôi cần làm gì?',
    value: 3,
  },

  {
    label:
      'Các bộ câu hỏi chuyên môn dùng cho việc đánh giá mức độ chậm phát triển, chậm nói, tự kỷ ở trẻ',
    value: 4,
  },
  {
    label:
      'Khi trẻ em được xác định có nguy cơ chậm phát triển hoặc tự kỷ tôi cần làm gì?',
    value: 5,
  },
];

export default function ContentSelector({ ...rest }: SelectProps) {
  return <Select options={options} {...rest} />;
}
