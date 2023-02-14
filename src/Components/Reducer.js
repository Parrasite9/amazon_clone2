export const initialState = {
    cart: [],
    user: null,
};

// SELECTOR 
export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            }

        case "REMOVE_FROM_CART":
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );

            // NEWCART CREATES A COPY OF THE CURRENT ARRAY THAT CONTAINS THE ITEMS IN CART 
            let newCart = [...state.cart]

            // SPLICE ALLOWS THE SELECTED ITEM TO BE CUT FROM THE ARRAY 
            if (index >= 0) {
                newCart.splice(index, 1);

            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as it's not in the cart!`
                );
            }

            // THIS IS SAYING "HEY THE CURRENT STATE IS NOW THE NEWCART"
            return {
                ...state, cart: newCart
            }

        case "SET_USER":
            return {
                ...state,
                user: action.self
            }

        default:
            return state;
    }
}

export default reducer