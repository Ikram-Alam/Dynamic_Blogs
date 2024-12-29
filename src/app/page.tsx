// pages/index.js

import BlogCard from '@/components/BlogCard';

export default function Home() {
  const posts = [
    { id: '1', title: 'Intro to AI', description: 'A beginner-friendly introduction to AI.', date: '2024-01-01' },
    { id: '2', title: 'Machine Learning Basics', description: 'Understanding supervised and unsupervised learning.', date: '2024-02-01' },
    { id: '3', title: 'Deep Learning Explained', description: 'An overview of deep learning and its applications.', date: '2024-03-01' },
    { id: '4', title: 'Natural Language Processing 101', description: 'Exploring the fundamentals of NLP and its use cases.', date: '2024-03-15' },
    { id: '5', title: 'AI in Healthcare', description: 'How AI is transforming the healthcare industry.', date: '2024-04-01' },
    { id: '6', title: 'Data Preprocessing Techniques', description: 'Essential techniques for preparing data for machine learning.', date: '2024-04-15' },
    { id: '7', title: 'Building Your First Neural Network', description: 'A step-by-step guide to creating a neural network.', date: '2024-05-01' },
    { id: '8', title: 'Ethics in AI', description: 'Discussing the ethical implications of AI technologies.', date: '2024-05-15' },
    { id: '9', title: 'AI for Image Recognition', description: 'Understanding how AI powers image recognition systems.', date: '2024-06-01' },
    { id: '10', title: 'Machine Learning Algorithms Demystified', description: 'A look at popular machine learning algorithms and their applications.', date: '2024-06-15' },
    { id: '11', title: 'AI in Finance', description: 'How AI is changing the landscape of the finance sector.', date: '2024-07-15' },
    { id: '12', title: 'The Role of Big Data in AI', description: 'Understanding the relationship between big data and AI.', date: '2024-08-01' },
    { id: '13', title: 'AI and Automative', description: 'Exploring the impact of AI on automotive in various industries.', date: '2024-08-15' },
    { id: '14', title: 'Getting Started with TensorFlow', description: 'A beginner’s guide to using TensorFlow for machine learning.', date: '2024-09-15' },
    { id: '15', title: 'AI-Powered Chatbots', description: 'How AI chatbots are transforming customer service and engagement.', date: '2024-10-15' },
  ];

  return (
    <div>
    <h1 className="text-3xl font-bold text-center my-8">Intelligence related Blogs</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <BlogCard 
          key={post.id} 
          post={post} 
          isDarkBackground={index % 2 === 0} 
        />
      ))}
    </div>
  </div>
  );
}
