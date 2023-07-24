import React, { useEffect, useState } from 'react';
import Card from './Card';
import SearchCollege from './SearchCollege';

const HomeCard = () => {
    const [collegeCard, setCollegeCard] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/college')
            .then(res => res.json())
            .then(data => {
                setCollegeCard(data)
                console.log(data)

            })

    }, []);

    const handleSearch = (searchTerm) => {
        // Filter the colleges based on the search term
        const filteredCollegeCard = collegeCard.filter((college) =>
          college.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setCollegeCard(filteredCollegeCard);
      };
    return (
        <div>
            <SearchCollege collegeCard={collegeCard} onSearch={handleSearch} />
             <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
             {
                        collegeCard.map(college=> <Card
                            key={college._id}
                            college={college}
                        >

                        </Card>)
                    }
        </div>
            
        </div>
    );
};

export default HomeCard;