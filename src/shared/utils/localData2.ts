import { Question } from './localData';
import Image21 from '#/assets/images/image21.jpg';
import Image23 from '#/assets/images/image23.jpg';
import Image25 from '#/assets/images/image25.jpg';

export const questions4: Question[] = [
  {
    id: 1,
    content:
      'Cho con nhìn bạn xếp bốn đồ vật như khối hộp hoặc ô-tô thành một hàng, con có biết bắt chước bạn xếp cả bốn đồ vật thành một hàng không? (Bạn có thể dùng các loại đồ vật khác như lõi cuộn chỉ, hộp nhỏ hoặc đồ chơi khác.)',
    takesUp: 10,
    images: Image21,
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
      'Nếu con của bạn muốn lấy một vật ở trên cao mà không với tới được, bé có tìm ghế hoặc hộp để đứng lên không (ví dụ lấy đồ chơi trên kệ hoặc “giúp” mẹ làm bếp)?',
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
      'Khi bạn chỉ vào hình bên và hỏi “Hình gì đây?”,con của bạn có nói được từ có liên quan đến người hoặc cái gì đó tương tự? (Đánh dấu “có” khi con nói được một trong các từ như: “người tuyết”, “con trai”, “đàn ông”, “con gái”, “bố”, “người ngoài hành tinh”, “con khỉ”, “con gà”.)',
    takesUp: 10,
    images: Image23,
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
      'Khi nghe bạn nói “Con hãy nói 7, 3”, con của bạn có thể lặp lại hai số này theo đúng thứ tự không? Không nhắc lại cặp số đó cho trẻ. Nếu cần, hãy sử dụng cặp số khác như “8, 2”. Bé chỉ cần lặp lại một dãy số (gồm hai chữ số) được tính là “có”.',
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
      'Chỉ cho con của bạn cách xây cầu bằng các khối gỗ, hộp nhỏ, hoặc lon, giống như mẫu. Bé có bắt chước làm giống bạn không?',
    takesUp: 10,
    images: Image25,
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
      'Khi bạn nói: “Con hãy nói 5, 8, 3”, con của bạn có nói lặp lại ba số này theo đúng thứ tự đó không? Không nhắc lại dãy số đó cho bé. Nếu cần, hãy sử dụng ba số khác như “6, 9, 2”. Bé chỉ cần lặp lại được một dãy số (gồm ba chữ số) thì được tính là “Có”.',
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

export const questions5: Question[] = [
  {
    id: 1,
    content:
      'Con của bạn có biết dùng muỗng/thìa để tự xúc ăn mà chỉ làm rơi vãi một ít hay không?',
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
      'Con của bạn có biết đẩy một toa xe, xe đẩy hoặc đồ chơi có bánh xe vòng quanh đồ vật và biết lùi lại ra khỏi góc hẹp nếu bé không thể rẽ/quẹo trái hay phải được không?',
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
      'Khi con của bạn nhìn vào gương và bạn hỏi “Ai trong gương thế?” bé có trả lời bằng cách nói “con đấy!” hoặc “(Tên bé)… đấy” không?',
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
    content: 'Con của bạn có biết tự mặc áo khoác, áo lạnh, áo sơ mi không?',
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
      'Hãy dùng chính xác những từ sau để hỏi con của bạn: “Con là con gái hay con trai?” Bé có biết trả lời đúng không?',
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
      'Con của bạn có biết luân phiên bằng cách chờ đợi đến lượt mình khi thấy người khác đang thực hiện lượt của họ không?',
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
