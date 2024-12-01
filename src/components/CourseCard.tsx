import React from 'react';
import { Course } from '../types/course';
import { BookOpen } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onClick: (courseId: string) => void;
}

export function CourseCard({ course, onClick }: CourseCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => onClick(course.id)}
    >
      <img 
        src={course.image} 
        alt={course.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-sm px-3 py-1 rounded-full ${
            course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
            course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {course.level}
          </span>
          <div className="flex items-center text-gray-600">
            <BookOpen size={16} className="mr-1" />
            <span className="text-sm">{course.duration}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
        {course.progress !== undefined && (
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${course.progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}