import React from 'react';

const RecommendedResearch = () => {
  const researchPapers = [
    {
      id: 1,
      title: 'Research Ethics',
      author: 'student',
      link: 'https://opentextbc.ca/researchmethods/part/research-ethics/',
    },
    {
      id: 2,
      title: 'Research Literature',
      author: 'student',
      link: 'https://opentextbc.ca/researchmethods/chapter/reviewing-the-research-literature/',
    },
    {
      id: 3,
      title: 'Theory of physychology',
      author: 'student',
      link: 'https://opentextbc.ca/researchmethods/part/theory-in-psychology/',
    },
    // Add more research papers here...
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Recommended Research Papers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchPapers.map((paper) => (
            <div key={paper.id} className="border rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
              <p className="text-gray-600 mb-4">Author: {paper.author}</p>
              <a href={paper.link} target="_blank" rel="noopener noreferrer" className="block text-blue-500 hover:underline">Read Paper</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedResearch;
