import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  role,
  delay = 0
}) => {
  return (
    <div 
      className="p-6 bg-white rounded-lg shadow-md animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Quote size={32} className="text-blue-300 mb-4" />
      <p className="text-slate-600 mb-6 italic">{quote}</p>
      <div>
        <p className="font-semibold text-blue-900">{author}</p>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;