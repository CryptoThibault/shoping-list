import { useState } from 'react'
import ShoppingList from './ShoppingList'
import AddPopularProduct from './AddPopularProduct'
import AddProductForm from './AddProductForm'

function ShoppingApp() {
  const [shopping, setShopping] = useState([])
  function addShopping(product) {
    setShopping(...shopping, product)
  }
  return (
    <main className="row">
      <section className="col-lg-8">
        <ShoppingList
          shopping={shopping}
        />
      </section>
      <section>
        <AddProductForm
          shopping={shopping}
          addShopping={addShopping}
        />
        <AddPopularProduct
          shopping={shopping}
          addShopping={addShopping}
        />
      </section>
    </main>
  )
}

export default ShoppingApp;