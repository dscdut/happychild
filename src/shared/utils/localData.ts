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
};

export type Author = {
  id: number;
  avatar: string;
  name: string;
  work: string;
  des: string;
};

export const questions: Question[] = [
  {
    id: 1,
    content: 'Is your child okay?',
    takesUp: 4,
    answers: [
      {
        id: 1,
        content: 'Yes',
        takesUp: 0,
      },
      {
        id: 2,
        content: 'No',
        takesUp: 1,
      },
    ],
  },
  {
    id: 2,
    content: 'How hard is your child temper on 1-5?',
    takesUp: 6,
    answers: [
      {
        id: 1,
        content: '1',
        takesUp: 0,
      },
      { id: 2, content: '2', takesUp: 0.25 },
      { id: 3, content: '3', takesUp: 0.5 },
      { id: 4, content: '4', takesUp: 0.75 },
      { id: 5, content: '5', takesUp: 1 },
    ],
  },
  {
    id: 3,
    content: 'How is your day on from 1 to 10',
    takesUp: 6,
    answers: [
      {
        id: 1,
        content: '1',
        takesUp: 1,
      },
      { id: 2, content: '2', takesUp: 1 },
      { id: 3, content: '3', takesUp: 1 },
      { id: 4, content: '4', takesUp: 0.75 },
      { id: 5, content: '5', takesUp: 0.75 },
      { id: 6, content: '6', takesUp: 0.5 },
      { id: 7, content: '7', takesUp: 0.5 },
      { id: 8, content: '8', takesUp: 0.25 },
      { id: 9, content: '9', takesUp: 0 },
      { id: 10, content: '10', takesUp: 0 },
    ],
  },
  {
    id: 4,
    content: 'Are you mad at things you don t like?',
    takesUp: 3,
    answers: [
      {
        id: 1,
        content: 'Yes',
        takesUp: 0,
      },
      {
        id: 2,
        content: 'No',
        takesUp: 1,
      },
    ],
  },
  {
    id: 5,
    content: 'What do you like most',
    takesUp: 4,
    hasMultiAnswers: true,
    answers: [
      {
        id: 1,
        content: 'Sword',
        takesUp: 0.4,
      },
      {
        id: 2,
        content: 'IPad',
        takesUp: 0,
      },
      {
        id: 3,
        content: 'Gun',
        takesUp: 0.5,
      },
      {
        id: 4,
        content: 'Computer',
        takesUp: 0,
      },
      {
        id: 5,
        content: 'Girl',
        takesUp: 0.1,
      },
    ],
  },
];
