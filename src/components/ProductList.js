import Product from './Product'

function ProductList() {
  let nbProduct = 4
  let indexProduct = []
  for (let i = 0; i < nbProduct; i++) {
    indexProduct.push(i)
  }
  return (<ol>
    {  nbProduct.map(product => {
      <Product key='product' />
    }
    )}
  </ol>
  )
}
export default ProductList;