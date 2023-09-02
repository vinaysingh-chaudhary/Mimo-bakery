import bakery from '../assets/category_images/bakery.png'
import coffee from '../assets/category_images/coffee.png'
import pastry from '../assets/category_images/pastry.png'
import cold from '../assets/category_images/cold.png'

const categories = [
    {id: "all", category: bakery},
    {id: "coffee", category: coffee},
    {id: "cold_coffee", category: cold},
    {id: "cupcake", category: pastry},
]


const Category = ({setCategory, filterByCategory}) => {

    const handleSetID = (category) => {
        setCategory(category)
        filterByCategory(category)
    }

    return (
        <div className="w-full h-16 flex bg-black">
            {categories.map((categ) => {
                return( 
                <button 
                    className={`w-1/4 bg-black flex justify-center items-center`}
                    key={categ.id}
                    onClick={() =>handleSetID(categ.id)}
                >
                <img src={categ.category}  className='w-10 hover:scale-110' alt="" /></button>)
            })}
        </div>
    )
}

export default Category;