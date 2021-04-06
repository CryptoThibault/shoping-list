function Product({ product }) {

  return (
    <div class="d-flex align-items-center justify-content-between">
      {product}
      <button
        class="btn btn-sm btn-warning"
      >ok</button>
    </div>
  )
}
export default Product;