import React, { useState } from 'react';
import { Header } from './components/Header';
import { CourseGrid } from './components/CourseGrid';
import { courses } from './data/courses';
import { GraduationCap } from 'lucide-react';

function App() {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const handleCourseClick = (courseId: string) => {
    setSelectedCourseId(courseId);
    // In a real app, this would navigate to the course details page
    alert('Course selected! In a real app, this would navigate to the course details.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Expand Your Knowledge
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover courses taught by industry experts and enhance your skills with hands-on projects
          </p>
        </div>
        
        <div className="flex items-center justify-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: GraduationCap, text: '100+ Courses', subtext: 'Learn at your own pace' },
              { icon: GraduationCap, text: 'Expert Instructors', subtext: 'Learn from the best' },
              { icon: GraduationCap, text: 'Lifetime Access', subtext: 'Learn anytime, anywhere' },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">{feature.text}</h3>
                <p className="text-gray-600">{feature.subtext}</p>
              </div>
            ))}
          </div>
        </div>

        <CourseGrid 
          courses={courses} 
          onCourseClick={handleCourseClick} 
        />
      </main>
    </div>
  );
}

export default App;