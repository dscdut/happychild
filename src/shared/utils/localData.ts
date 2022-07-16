import Image1 from '#/assets/images/image1.jpg';
import Image3 from '#/assets/images/image2.jpg';
import Image4 from '#/assets/images/image4.jpg';
import Image5 from '#/assets/images/image5.jpg';
import Image6 from '#/assets/images/image6.jpg';
import Image11 from '#/assets/images/image11.jpg';
import Image12 from '#/assets/images/image12.jpg';
import Image13 from '#/assets/images/image13.jpg';
import Image14 from '#/assets/images/image14.jpg';
import Image15 from '#/assets/images/image15.jpg';
import Image16 from '#/assets/images/image16.jpg';

export type Answer = {
  content: string;
  takesUp: number;
  id: number;
};

export type Question = {
  id: number;
  content: string;
  takesUp: number;
  hasMultiAnswers?: boolean;
  answers: Answer[];
  images?: string;
};

export type Author = {
  id: number;
  avatar: string;
  name: string;
  work: string;
  des: string;
};

export type Stage = {
  id: number;
  stageName: string;
  questions: Question[];
};

export const questions1: Question[] = [
  {
    id: 1,
    content:
      'Khi bạn gọi con của bạn ở một vị trí mà bé không nhìn thấy, bé có quay nhìn về hướng bạn gọi không?',
    takesUp: 10,
    answers: [
      {
        id: 1,
        content: 'Có',
        takesUp: 1,
      },
      {
        id: 2,
        content: 'Thỉnh Thoảng',
        takesUp: 0.5,
      },
      {
        id: 3,
        content: 'Chưa',
        takesUp: 0,
      },
    ],
  },
  {
    id: 2,
    content:
      'Khi có một tiếng động lớn, con của bạn có quay nhìn về hướng phát ra tiếng động ấy không?',
    takesUp: 10,
    answers: [
      {
        id: 1,
        content: 'Có',
        takesUp: 1,
      },
      {
        id: 2,
        content: 'Thỉnh Thoảng',
        takesUp: 0.5,
      },
      {
        id: 3,
        content: 'Chưa',
        takesUp: 0,
      },
    ],
  },
  {
    id: 3,
    content:
      'Nếu bạn bắt chước âm thanh mà con của bạn tạo ra, bé có lặp lại âm thanh đó đáp lại bạn không?',
    takesUp: 10,
    answers: [
      {
        id: 1,
        content: 'Có',
        takesUp: 1,
      },
      {
        id: 2,
        content: 'Thỉnh Thoảng',
        takesUp: 0.5,
      },
      {
        id: 3,
        content: 'Chưa',
        takesUp: 0,
      },
    ],
  },
  {
    id: 4,
    content:
      'Con của bạn có phát ra các âm thanh như “đa”, “ga”, “ca” và “ba” không?',
    takesUp: 10,
    answers: [
      {
        id: 1,
        content: 'Có',
        takesUp: 1,
      },
      {
        id: 2,
        content: 'Thỉnh Thoảng',
        takesUp: 0.5,
      },
      {
        id: 3,
        content: 'Chưa',
        takesUp: 0,
      },
    ],
  },
  {
    id: 5,
    content:
      'Con của bạn có phản ứng với giọng điệu của bạn và dừng hoạt động (dù chỉ một chút) khi bạn nói “không-không” với bé không?',
    takesUp: 10,
    answers: [
      {
        id: 1,
        content: 'Có',
        takesUp: 1,
      },
      {
        id: 2,
        content: 'Thỉnh Thoảng',
        takesUp: 0.5,
      },
      {
        id: 3,
        content: 'Chưa',
        takesUp: 0,
      },
    ],
  },
  {
    id: 6,
    content:
      'Con của bạn có phát ra hai âm giống nhau như “ba-ba”, “đa-đa” hoặc “ga-ga” không? (Các âm này không nhất thiết phải có nghĩa.)',
    takesUp: 10,
    answers: [
      {
        id: 1,
        content: 'Có',
        takesUp: 1,
      },
      {
        id: 2,
        content: 'Thỉnh Thoảng',
        takesUp: 0.5,
      },
      {
        id: 3,
        content: 'Chưa',
        takesUp: 0,
      },
    ],
  },
];
export const questions2: Question[] = [
  {
    id: 1,
    content:
      'Khi bạn đặt con lên sàn, con của bạn có chống hai tay lên sàn nhà để đỡ thân mình trong khi ngồi không? (Nếu bé đã biết ngồi thẳng mà không cần dùng hai tay chống lên sàn, đánh dấu “có” cho câu hỏi này.)',
    takesUp: 10,
    images: Image1,
    answers: [
      {
        id: 1,
        content: 'Có',
        takesUp: 1,
      },
      {
        id: 2,
        content: 'Thỉnh Thoảng',
        takesUp: 0.5,
      },
      {
        id: 3,
        content: 'Chưa',
        takesUp: 0,
      },
    ],
  },
  {
    id: 2,
    content:
      'Con của bạn có biết lật/lẫy từ nằm ngửa sang nằm sấp và tự rút cả hai tay ra ngoài không?',
    takesUp: 10,
    answers: [
      {
        id: 1,
        content: 'Có',
        takesUp: 1,
      },
      {
        id: 2,
        content: 'Thỉnh Thoảng',
        takesUp: 0.5,
      },
      {
        id: 3,
        content: 'Chưa',
        takesUp: 0,
      },
    ],
  },
  {
    id: 3,
    content: 'Con của bạn có chống hai tay và đầu gối để bò không?',
    takesUp: 10,
    images: Image3,
    answers: [
      {
        id: 1,
        content: 'Có',
        takesUp: 1,
      },
      {
        id: 2,
        content: 'Thỉnh Thoảng',
        takesUp: 0.5,
      },
      {
        id: 3,
        content: 'Chưa',
        takesUp: 0,
      },
    ],
  },
  {
    id: 4,
    content:
      'Con của bạn có tự đứng khi bạn nắm hai tay bé để giữ thăng bằng cho bé không?',
    takesUp: 10,
    images: Image4,
    answers: [
      {
        id: 1,
        content: 'Có',
        takesUp: 1,
      },
      {
        id: 2,
        content: 'Thỉnh Thoảng',
        takesUp: 0.5,
      },
      {
        id: 3,
        content: 'Chưa',
        takesUp: 0,
      },
    ],
  },
  {
    id: 5,
    content:
      'Khi ngồi trên sàn nhà, con của bạn có thể ngồi thẳng trong vài phút mà không cần chống tay không?',
    takesUp: 10,
    images: Image5,
    answers: [
      {
        id: 1,
        content: 'Có',
        takesUp: 1,
      },
      {
        id: 2,
        content: 'Thỉnh Thoảng',
        takesUp: 0.5,
      },
      {
        id: 3,
        content: 'Chưa',
        takesUp: 0,
      },
    ],
  },
  {
    id: 6,
    content:
      'Khi bạn để con của bạn đứng cạnh bàn hoặc thành nôi, bé có thể vịn tay đứng được mà không cần tựa ngực không?',
    takesUp: 10,
    images: Image6,
    answers: [
      {
        id: 1,
        content: 'Có',
        takesUp: 1,
      },
      {
        id: 2,
        content: 'Thỉnh Thoảng',
        takesUp: 0.5,
      },
      {
        id: 3,
        content: 'Chưa',
        takesUp: 0,
      },
    ],
  },
];
export const questions3: Question[] = [
  {
    id: 1,
    content:
      'Con của bạn có với tay lấy mẩu bánh nhỏ và chạm ngón tay hoặc bàn tay vào bánh không? (Nếu bé đã biết nhặt những vật có kích thước nhỏ như hạt đậu thì đánh dấu “có” cho câu hỏi này.)',
    takesUp: 10,
    images: Image11,
    answers: [
      {
        id: 1,
        content: 'Có',
        takesUp: 1,
      },
      {
        id: 2,
        content: 'Thỉnh Thoảng',
        takesUp: 0.5,
      },
      {
        id: 3,
        content: 'Chưa',
        takesUp: 0,
      },
    ],
  },
  {
    id: 2,
    content:
      'Con của bạn có biết nhặt một món đồ chơi nhỏ rồi nắm chặt món đồ trong lòng bàn tay (với các ngón tay vòng quanh món đồ) không?',
    takesUp: 10,
    images: Image12,
    answers: [
      {
        id: 1,
        content: 'Có',
        takesUp: 1,
      },
      {
        id: 2,
        content: 'Thỉnh Thoảng',
        takesUp: 0.5,
      },
      {
        id: 3,
        content: 'Chưa',
        takesUp: 0,
      },
    ],
  },
  {
    id: 3,
    content:
      'Con của bạn có cố nhặt mẩu bánh nhỏ bằng cách dùng ngón tay cái và các ngón tay khác, ngay cả khi bé không nhặt được, không? (Nếu bé đã biết nhặt mẩu bánh thì đánh dấu “Có” cho câu hỏi này.)',
    takesUp: 10,
    images: Image13,
    answers: [
      {
        id: 1,
        content: 'Có',
        takesUp: 1,
      },
      {
        id: 2,
        content: 'Thỉnh Thoảng',
        takesUp: 0.5,
      },
      {
        id: 3,
        content: 'Chưa',
        takesUp: 0,
      },
    ],
  },
  {
    id: 4,
    content: 'Con của bạn có nhặt một món đồ chơi nhỏ chỉ bằng một tay không?',
    takesUp: 10,
    images: Image14,
    answers: [
      {
        id: 1,
        content: 'Có',
        takesUp: 1,
      },
      {
        id: 2,
        content: 'Thỉnh Thoảng',
        takesUp: 0.5,
      },
      {
        id: 3,
        content: 'Chưa',
        takesUp: 0,
      },
    ],
  },
  {
    id: 5,
    content:
      'Con của bạn có nhặt được mẩu bánh nhỏ bằng cách dùng ngón tay cái và các ngón tay khác không? (Nếu bé đã biết nhặt mẩu bánh thì đánh dấu “có” cho câu hỏi này.)',
    takesUp: 10,
    images: Image15,
    answers: [
      {
        id: 1,
        content: 'Có',
        takesUp: 1,
      },
      {
        id: 2,
        content: 'Thỉnh Thoảng',
        takesUp: 0.5,
      },
      {
        id: 3,
        content: 'Chưa',
        takesUp: 0,
      },
    ],
  },
  {
    id: 6,
    content:
      'Con của bạn có dùng đầu ngón tay cái và các đầu ngón tay khác để nhặt một đồ chơi nhỏ không? (Bạn phải thấy được khoảng trống giữa đồ chơi và lòng bàn tay của bé.)',
    takesUp: 10,
    images: Image16,
    answers: [
      {
        id: 1,
        content: 'Có',
        takesUp: 1,
      },
      {
        id: 2,
        content: 'Thỉnh Thoảng',
        takesUp: 0.5,
      },
      {
        id: 3,
        content: 'Chưa',
        takesUp: 0,
      },
    ],
  },
];

export const stages: Stage[] = [
  {
    id: 1,
    stageName: 'Giao Tiếp',
    questions: questions1,
  },
  {
    id: 2,
    stageName: 'Vận Động Thô',
    questions: questions2,
  },
  {
    id: 1,
    stageName: 'Vận Động Tinh',
    questions: questions3,
  },
];
