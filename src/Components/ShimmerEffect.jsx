import React from 'react'

export const ShimmerCard = () => {
    return(
        <div className="w-[185px] h-[250px] md:w-[220px] lg:w-[300px] lg:h-[270px] rounded-md flex flex-col justify-center items-center bg-gradient-to-br from-[#F1DEC9] to-[#A4907C] "></div>
    )
    
}

const ShimmerEffect = () => {
    // Create an array of 10 elements
    const shimmerCards = new Array(13).fill(0);
  
    return (
      <div className='flex flex-wrap gap-2 justify-center itemc'>
        {shimmerCards.map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    );
  };

export default ShimmerEffect
