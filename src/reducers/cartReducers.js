import { ADD_PRODUCT_CART, GET_NUMBERS_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from '../actions/types'

const initialState = {
    cartNumber: 0, // quantity on the right side of cartNav
    cartCost: 0, // total cost

    //product list
    products: {
        item1: {// this is product key
            name: "Bagel",
            tagName: "item1", //equal to product key
            price: 45,
            numbers: 0, //initializing quantity of product
            inCart: false // is there any in the cart yet? false = none
            },
        item2: {
            name: "Blueberry Cupcake",
            tagName: "item2",
            price: 65,
            numbers: 0,
            inCart: false 
            },
        item3: {
            name: "Chocolate Cake",
            tagName: "item3",
            price: 780,
            numbers: 0,
            inCart: false 
            },
        item4: {
            name: "Chocolate Chips Cookie",
            tagName: "item4",
            price: 45,
            numbers: 0,
            inCart: false 
            },
        item5: {
            name: "Chocolate Muffin",
            tagName: "item5",
            price: 65,
            numbers: 0,
            inCart: false 
            },
        item6: {
            name: "Cinnamon Roll",
            tagName: "item6",
            price: 75,
            numbers: 0,
            inCart: false 
            },
        item7: {
            name: "Croissant",
            tagName: "item7",
            price: 50,
            numbers: 0,
            inCart: false 
            },
        item8: {
            name: "Doughnut",
            tagName: "item8",
            price: 35,
            numbers: 0,
            inCart: false 
            },
        item9: {
            name: "French Bread",
            tagName: "item9",
            price: 120,
            numbers: 0,
            inCart: false 
            },
        item10: {
            name: "Garlic Bread",
            tagName: "item10",
            price: 75,
            numbers: 0,
            inCart: false 
            },
        item11: {
            name: "Red Velvet Cupcake",
            tagName: "item11",
            price: 75,
            numbers: 0,
            inCart: false 
            },
        item12: {
            name: "Strawberry Cake",
            tagName: "item12",
            price: 850,
            numbers: 0,
            inCart: false 
            },
        item13: {
            name: "Strawberry Cheesecake",
            tagName: "item13",
            price: 75,
            numbers: 0,
            inCart: false 
            },
        item14: {
            name: "Strawberry Pie",
            tagName: "item14",
            price: 545,
            numbers: 0,
            inCart: false 
            },
        item15: {
            name: "Toast with Egg",
            tagName: "item15",
            price: 75,
            numbers: 0,
            inCart: false 
            },
        item16: {
            name: "Wheat Bread",
            tagName: "item16",
            price: 150,
            numbers: 0,
            inCart: false 
            },
    }
};

export default (state = initialState, action) => {

    let productSelected = "";

    switch(action.type){
        case ADD_PRODUCT_CART:
            productSelected = { ...state.products[action.payload]}

            productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(productSelected);

            return {
                ...state,
                cartNumber: state.cartNumber + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case GET_NUMBERS_CART:
            return {
                ...state
            }
        case INCREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]};
            productSelected.numbers += 1;
            return {
                ...state,
                cartNumber: state.cartNumber + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case DECREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]};
            let newCartCost = 0;
            let newCartNumber = 0;

            if(productSelected.numbers === 0){
                productSelected.numbers = 0;
                newCartCost = state.cartCost
                newCartNumber = state.cartNumber
            }else{
                productSelected.numbers -= 1;
                newCartCost = state.cartCost - state.products[action.payload].price;
                newCartNumber = state.cartNumber - 1
            }

            return {
                ...state,
                cartNumber: newCartNumber,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case CLEAR_PRODUCT:
            productSelected = { ...state.products[action.payload]};
            let numbersBackup = productSelected.numbers // before setting productSelected.numbers to 0
            productSelected.numbers = 0;
            productSelected.inCart = false;
            return {
                ...state,
                cartNumber: state.cartNumber - numbersBackup,
                cartCost: state.cartCost - (numbersBackup * productSelected.price),
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }   
        default:
            return state;
    }
}