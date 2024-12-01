import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/home/Hero';
import { CourseGrid } from './components/courses/CourseGrid';
import { FeatureSection } from './components/features/FeatureSection';

const courses = [
  {
    id: 1,
    title: 'Web Development Fundamentals',
    description: 'Learn the core concepts of web development from scratch',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    level: 'Beginner',
    duration: '8 weeks',
    lessons: 24,
    rating: 4.8
  },
  {
    id: 2,
    title: 'UI/UX Design Masterclass',
    description: 'Master the art of creating beautiful user interfaces',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    level: 'Intermediate',
    duration: '10 weeks',
    lessons: 32,
    rating: 4.9
  },
  {
    id: 3,
    title: 'Advanced JavaScript',
    description: 'Deep dive into advanced JavaScript concepts and patterns',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=800&q=80',
    level: 'Advanced',
    duration: '12 weeks',
    lessons: 40,
    rating: 4.7
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <FeatureSection />
      <CourseGrid courses={courses} />
    </div>
  );
}

export default App;