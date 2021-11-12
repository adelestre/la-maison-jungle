function Cart() {
    const plants = [{nom: "Monstera", prix: 8}, {nom: "Lierre", prix: 10}, {nom: "Fleurs", prix: 15}];
    const list = plants.map((plant, index) => {
      return <li key={`${plant}-${index}`}>{plant.nom} : {plant.prix}€</li>
    })
    var total = 0;
    plants.forEach((plant) => { total += plant.prix })
    return (
      <div className="lmj-cart">
        <h2>Panier</h2>
        <ul>
          {list}
        </ul>
        <p>Total : {total}€</p>
      </div>
    )
}

export default Cart;