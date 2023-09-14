import bakery from '../assets/category_images/bakery.png'
import coffee from '../assets/category_images/coffee.png'
import pastry from '../assets/category_images/pastry.png'
import cold from '../assets/category_images/cold.png'

const categories = [
    {id: "all", category: bakery},
    {id: "coffee", category: coffee},
    {id: "coldcoffee", category: cold},
    {id: "cupcake", category: pastry},
]


const Category = ({setCategory, filterByCategory, category}) => {

    const handleSetID = (category) => {
        setCategory(category)
        filterByCategory(category)
    }

    return (
        <div className="w-full md:w-2/3 md:mt-2 md:rounded-md lg:w-3/6 h-16 md:h-[4.5rem] lg:h-[7rem] flex justify-around bg-[#C8B6A6] ">
            {categories.map((categ) => {
                return( 
                <button 
                    className={`w-1/4 flex flex-col gap-1 justify-center items-center relative`}
                    key={categ.id}
                    onClick={() =>handleSetID(categ.id)}
                >
                <img src={categ.category}  className='w-10 lg:h-[60%] h-[65%] md:h-[70%] hover:scale-110 md:pt-1 z-20' alt="" />
                {  category ===  categ.id && <div className='absolute  top-0 right-0 bg-[#b79d87] w-full h-full z-0 rounded-md'></div> }
                </button>)
            })}
        </div>
    )
}

export default Category;