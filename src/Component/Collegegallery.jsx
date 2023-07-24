import React from 'react';

const Collegegallery = () => {
    const collegeImages = [
        {
          id: 1,
          imageUrl: 'https://www.shutterstock.com/shutterstock/photos/658847998/display_1500/stock-photo-graduation-caps-thrown-in-the-air-658847998.jpg',
          alt: 'College Graduates 1',
        },
        {
          id: 2,
          imageUrl: 'https://c8.alamy.com/comp/PG9KAG/a-group-of-graduates-gather-during-the-46th-convocation-of-the-students-of-dhaka-university-dhaka-bangladesh-PG9KAG.jpg',
          alt: 'College Graduates 2',
        },
        {
            id: 3,
            imageUrl:'https://www.shutterstock.com/shutterstock/photos/2227968677/display_1500/stock-photo-a-group-of-graduates-gather-to-expressing-their-delight-of-the-curzon-hall-at-university-area-on-2227968677.jpg',
            alt: 'College Graduates 3',
          },
          {
            id: 4,
            imageUrl: 'https://c8.alamy.com/comp/PG9M0P/a-group-of-graduates-gather-during-the-46th-convocation-of-the-students-of-dhaka-university-dhaka-bangladesh-PG9M0P.jpg',
            alt: 'College Graduates 4',
          },
          {
            id: 5,
            imageUrl: 'https://wub.edu.bd/assets/images/program-2.png',
            alt: 'College Graduates 5',
          },
          {
            id: 6,
            imageUrl: 'https://c8.alamy.com/comp/PG9M0P/a-group-of-graduates-gather-during-the-46th-convocation-of-the-students-of-dhaka-university-dhaka-bangladesh-PG9M0P.jpg',
            alt: 'College Graduates 6',
          },
          // Add more images and their alt text here...
        ];
      
    return (
        <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">College Graduates Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {collegeImages.map((image) => (
            <img
              key={image.id}
              src={image.imageUrl}
              alt={image.alt}
              className="rounded-lg shadow-md h-64 w-96"
            />
          ))}
        </div>
      </div>
    </section>
    );
};

export default Collegegallery;