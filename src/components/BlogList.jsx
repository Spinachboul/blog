import React from 'react';
import {Calender, Clock} from 'lucide-react';

const BlogList = ({blogs, openBlog}) => (
    <div className='max-w-4xl mx-auto p-6'>
        <div className='mb-8'>
            <h1 className='text-4xl font-bold text-gray-900 mb-2'>My Blogs</h1>
            <p className='text-gray-600'>Machine Learning and the daily tea</p>
        </div>

        <div className='space-y-6'>
            {blogs.map((blog, index) => (
                <article
                key = {blog.id}
                className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 cursor-pointer border border-gray-200'
                onClick={() => openBlog(index)}
                >
                    <div className='flex items-center text-sm text-gray-500 mb-3'>
                        <Calender className='w-4 h-4 mr-2' />
                        <span className='mr-4'>{new Date(blog.date).toLocaleDateString()}</span>
                        <Clock className='w-4 h-4 mr-2' />
                        <span>{blog.readTime}</span>
                    </div>

                    <h2 className='text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors'>
                        {blog.title}
                    </h2>

                    <p className='text-gray-700 leading-relaxed'>
                        {blog.summary}
                    </p>

                    <div className='mt-4'>
                        <span className='inline-flex items-center text-blue-600 hover:text-blue-800 font-medium'>
                            Read More...
                        </span>
                    </div>

                </article>
            ))}
        </div>
    

    </div>
);

export default BlogList;