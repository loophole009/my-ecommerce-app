import React from 'react';
import styled from 'styled-components';

const CartContainer = styled.div` /* ... */ `;
const CartItem = styled.div` /* ... */ `;
const QuantityInput = styled.input`
  width: 50px;
`;

function CartPage({ cartItems, setCartItems }) {
    const handleQuantityChange = (index, quantity) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity = parseInt(quantity); // Ensure it's a number
        setCartItems(updatedCart);
    };

    const handleRemoveFromCart = (index) => { /* ... */ };

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleCheckout = () => {
        alert('Checkout completed! Thank you for your order.'); // Replace with actual checkout logic
        setCartItems([]);  // Clear the cart after checkout
    };

    return (
        <CartContainer>
            <h3>Shopping Cart</h3>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map((item, index) => (
                    <CartItem key={index}>
                        <div>{item.name}</div>
                        <div>
                            Price: ${item.price}
                        </div>
                        <div>
                            Quantity: <QuantityInput type="number" value={item.quantity} onChange={(e) => handleQuantityChange(index, e.target.value)} />
                        </div>

                        <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
                    </CartItem>
                ))
            )}
            <div>
                Total: ${totalPrice.toFixed(2)}
            </div>
        </CartContainer>
    );
}
export default CartPage;
