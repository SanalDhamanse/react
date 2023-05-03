export default function cartReducer(cart, action) {
  switch (action.type) {
    case "empty":
      return [];
    case "add":
      let { id, sku } = action;
      const itemInCart = cart.find((i) => i.sku === sku);
      if (itemInCart) {
        return cart.map((i) =>
          i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...cart, { id, sku, quantity: 1 }];
      }
    case "updateQuantity": {
      const { quantity, sku } = action;
      action;
      if (quantity === 0) {
        return cart.filter((i) => i.sku !== sku);
      }

      return cart.map((i) =>
        i.sku === sku ? { ...i, quantity: quantity } : i
      );
    }
    default:
      throw new Error("Unhandled Action " + action.type);
  }
}
