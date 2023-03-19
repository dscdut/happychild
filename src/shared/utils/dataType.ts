export type Stage = {
  id: number;
  stageName: string;
  questions: Question[];
};

export type Question = {
  id: number;
  skill: string;
  content: Content[];
};

export type Content = {
  title: string;
  description: string;
  image?: string;
  answers: Answer[];
};

export type Answer = {
  id: number;
  content: string;
  point: number;
};
