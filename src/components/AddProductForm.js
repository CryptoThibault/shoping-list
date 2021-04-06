function AddProductForm({ shopping, addToShoppingList }) {
  function handleFormSubmit(event) {

    event.preventDefault()

    const newProduct = event.target.elements.product.value

    if (shopping.includes(newProduct)) {
      alert(`${newProduct} est déjà sur la liste`)
    } else {
      addToShoppingList(newProduct)
    }

    event.target.reset()
  }
  return <form onSubmit={handleFormSubmit}>
    <div className="input-group mb-2">
      <input
        id="product"
        className="form-control"
        aria-label="Ajouter sur la liste"
        required
      />
      <button type="submit" className="btn btn-success btn-lg">
        J'ajoute !
        </button>
    </div>
  </form>
}

export default AddProductForm;