export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
  progress?: number;
}

export interface Lesson {
  id: string;
  title: string;
  completed: boolean;
}