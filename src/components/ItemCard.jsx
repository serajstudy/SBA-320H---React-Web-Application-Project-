function ItemCard({ item, dispatch }) {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <button onClick={() => dispatch({type:'ADD_TO_CART', item})}>
        Add to Cart
      </button>
    </div>
  )
}

export default ItemCard
