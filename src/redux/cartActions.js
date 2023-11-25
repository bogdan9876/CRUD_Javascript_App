export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  payload: item,
});

export const incrementItemQuantity = (itemId) => ({
  type: 'INCREMENT_ITEM_QUANTITY',
  payload: itemId,
});

export const decrementItemQuantity = (itemId) => ({
  type: 'DECREMENT_ITEM_QUANTITY',
  payload: itemId,
});

export const removeFromCart = (itemId) => ({
  type: 'REMOVE_FROM_CART',
  payload: itemId,
});
