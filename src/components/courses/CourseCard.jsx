import { Clock, BookOpen, Star } from 'lucide-react';

export function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={course.image}
          alt={course.title}
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium text-indigo-600">
          {course.level}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{course.lessons} lessons</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 text-yellow-400" />
            <span>{course.rating}</span>
          </div>
        </div>
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
          Enroll Now
        </button>
      </div>
    </div>
  );
}