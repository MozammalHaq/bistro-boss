

const FoodCard = ({item}) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-6">
            <figure><img src={image} alt="Shoes" /></figure>
            <span className="absolute right-4 top-4 px-3 py-2 rounded-xl bg-black text-white">{price}</span>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;