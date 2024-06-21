import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
    /* dopylnitelni razqsneniq na predniq screenshot - dostypvame celiq state na prilozhenieto s useSelector.
    Ponezhe v momenta edinstveniq dobaven reducer e cart: cartReducer, mozhem da dostypim samo nego.
    dostypvame amount s destruktirirane i izpolzvame .cart, zashtoto tova ime sme zadali v store.js.
    IZVOD!!! SO THAT'S HOW WE CAN ACCESS DATA FROM OUR SLICE.
    WE NEED TO PICK THE COMPONENT -> import { useSelector } from 'react-redux';
    WE NEED TO USE THE USE SELECTOR (BELOW). AND HERE, WE PASS IN THE FUNCTION -> (store) => store.cart AND AS A PARAMETER OF
    THIS FUNCTION GETS THE ENTIRE STORE. AND THEN WE JUST NEED TO PICK WHAT WE WANNA RETURN. IN THIS CASE, WE WANNA RETYRN CART
    FROM THIS FUNCTION. IT IS AN OBJECT, AND IT REPRESENTS THIS INITIAL STATE (IN cartSlice.js).
    */
    const { amount } = useSelector((store) => store.cart);
    // pyrvonachalno go bqhme napisali taka:
    // const amount = useSelector((store) => store.cart.amount);

    return (
        <nav>
            <div className='nav-center'>
                <h3>redux toolkit</h3>
                <div className='nav-container'>
                    <CartIcon />
                    <div className='amount-container'>
                        <p className='total-amount'>{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar