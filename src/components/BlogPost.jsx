import React from "react";
import {Calender, Clock, ChevronLeft, ChevronRight} from "lucide-react";

const BlogPost = ({blog, index, total, onPrev, onNext}) => (
    <div className="max-w-4xl mx-auto p-6">
        <div className="mb-6">
            <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calender className='w-4 h-4 mr-2' />
                <span className="mr-4">{new Date(blog.date).toLocaleDateString()}</span>
                <Clock className="w-4 h-4 mr-2" />
                <span>{blog.readTime}</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
        </div>

        <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">{blog.title}</p>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <button
            onClick={onPrev}
            disabled={index == 0}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${index === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blie-50 hover:text-blue-800'}`}>
                <ChevronLeft className="w-5 h-5 mr-2" />
                Previous Post
            </button>

            <span className="text-gray-500">{index+1} of {total}</span>

            <button
            onClick={onNext}
            disabled = {index === total-1}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
          index === total - 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-blue-600 hover:bg-blue-50 hover:text-blue-800'
        }`}>
            Next Post
            <ChevronRight className="w-5 h-5 ml-2" />
        </button>
        </div>

    </div>

);

export default BlogPost;