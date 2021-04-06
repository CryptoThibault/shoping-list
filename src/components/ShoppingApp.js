import { useState } from 'react'
import ShoppingList from './ShoppingList'
import AddPopularProduct from './AddPopularProduct'
import AddProductForm from './AddProductForm'

function ShoppingApp() {
  const [shopping, setShopping] = useState([])

  function addToShoppingList(product) {
    setShopping([...shopping, product])
  }
  function removeFromShoppingList(product) {
    setShopping(shopping.filter((el) => el !== product))
  }
  return (
    <main className="row">
      <section className="col-lg-8">
        <ShoppingList
          shopping={shopping}
          removeFromShoppingList={removeFromShoppingList}
        />
      </section>
      <section>
        <AddProductForm
          shopping={shopping}
          addToShoppingList={addToShoppingList}
        />
        <AddPopularProduct
          shopping={shopping}
          addToShoppingList={addToShoppingList}
        />
      </section>
    </main>
  )
}

export default ShoppingApp;