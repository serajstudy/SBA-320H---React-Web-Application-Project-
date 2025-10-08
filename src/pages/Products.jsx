import { useState, useEffect, useReducer } from 'react'
import ItemCard from '../components/ItemCard'
// import './Products.css'

// Reducer for cart actions
function cartReducer(state, action) {
  switch(action.type) {
    case 'ADD_TO_CART':
      return [...state, action.item]
    case 'REMOVE_FROM_CART':
      return state.filter(i => i.id !== action.id)
    default:
      return state
  }
}

function Products() {
  const [items, setItems] = useState([])
  const [cart, dispatch] = useReducer(cartReducer, [])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10') 
      .then(res => res.json())
      .then(data => {
        const mappedItems = data.results.map((item, index) => ({
          id: index + 1,
          name: item.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }))
        setItems(mappedItems)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <h2>Products</h2>
      {loading ? <p>Loading items...</p> : (
        <div className="item-list">
          {items.map(item => (
            <ItemCard key={item.id} item={item} dispatch={dispatch} />
          ))}
        </div>
      )}
      <h3>Cart ({cart.length})</h3>
      <ul>
        {cart.map(c => (
          <li key={c.id}>
            {c.name} <button onClick={() => dispatch({type:'REMOVE_FROM_CART', id:c.id})}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
