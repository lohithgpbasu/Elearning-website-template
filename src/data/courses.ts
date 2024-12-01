import { Course } from '../types/course';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of HTML, CSS, and JavaScript',
    duration: '6 hours',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    progress: 0,
  },
  {
    id: '2',
    title: 'React Fundamentals',
    description: 'Master the basics of React and component-based architecture',
    duration: '8 hours',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    progress: 0,
  },
  {
    id: '3',
    title: 'Advanced JavaScript Patterns',
    description: 'Deep dive into advanced JavaScript concepts and patterns',
    duration: '10 hours',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80',
    progress: 0,
  },
];