function AddProductForm({ shopping, addShopping }) {
  return (
    <form className="mb-5" onSubmit={(event) => addShopping(event)}>
      <div className="input-group mb-2">
        <input
          id="product"
          className="form-control"
          aria-label="Ajouter sur la liste"
          required
        />
        <button
          type="submit"
          className="btn btn-success btn-lg"
        >J'ajoute !
        </button>
      </div>
    </form>
  )
}

export default AddProductForm;