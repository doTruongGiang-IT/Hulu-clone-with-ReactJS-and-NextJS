import React from 'react';

function StatItem({stat}) {
    return (
        <div className="flex sm:flex-col justify-center items-start mr-2 mb-5 sm:mr-20 sm:mb-10 sm:items-center">
            <h className="text-sm mr-3 sm:mr-0 sm:text-3xl font-medium">{stat.number}</h>
            <p className="text-sm font-thin">{stat.name}</p>
        </div>
    )
}

export default StatItem;
