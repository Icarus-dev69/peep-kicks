import React, { useState } from 'react'
import "./styles.css"
import { Icon } from '@iconify/react';
import Footer from "../../components/Footer"

const Cart = () => {
    const [isModalOpen,setIsModalOpen] = useState(false)
  return (
    <>
    <div className='cart-parent-container container'>
        <h3>My Cart</h3>
        <div className='cart-table-wrapper'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='cart-item-row'>
                        <td className='cart-name'>Nike Air Force 1 '07 </td>
                        <td>6</td>
                        <td>
                            <button className='cart-quantity-minus'>-</button>
                            <input type='number' min={1}></input>
                            <button className='cart-quantity-plus'>+</button>
                        </td>
                        <td>$ 110</td>
                        <td><Icon icon="iconamoon:trash-fill" className='cart-delete-icon'/></td>
                    </tr>
                    <tr className='cart-item-row'>
                        <td className='cart-name'>Nike Air Force 1 '07</td>
                        <td>6</td>
                        <td>
                            <button className='cart-quantity-minus'>-</button>
                            <input type='number' min={1}></input>
                            <button className='cart-quantity-plus'>+</button>
                        </td>
                        <td>$ 110</td>
                        <td><Icon icon="iconamoon:trash-fill" className='cart-delete-icon'/></td>
                    </tr>
                    <tr className='cart-item-row'>
                        <td className='cart-name'>Nike Air Force 1 '07</td>
                        <td>6</td>
                        <td>
                            <button className='cart-quantity-minus'>-</button>
                            <input type='number' min={1}></input>
                            <button className='cart-quantity-plus'>+</button>
                        </td>
                        <td>$ 110</td>
                        <td><Icon icon="iconamoon:trash-fill" className='cart-delete-icon'/></td>
                    </tr>
                    <tr className='cart-item-row'>
                        <td className='cart-name'>Nike Air Force 1 '07</td>
                        <td>6</td>
                        <td>
                            <button className='cart-quantity-minus'>-</button>
                            <input type='number' min={1}></input>
                            <button className='cart-quantity-plus'>+</button>
                        </td>
                        <td>$ 110</td>
                        <td><Icon icon="iconamoon:trash-fill" className='cart-delete-icon'/></td>
                    </tr>
                    <tr className='cart-item-row'>
                        <td className='cart-name'>Nike Air Force 1 '07</td>
                        <td>6</td>
                        <td>
                            <button className='cart-quantity-minus'>-</button>
                            <input type='number' min={1}></input>
                            <button className='cart-quantity-plus'>+</button>
                        </td>
                        <td>$ 110</td>
                        <td><Icon icon="iconamoon:trash-fill" className='cart-delete-icon'/></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className='cart-btns-container'>
            <button className='primary-btn' onClick={() => setIsModalOpen(true)}>Order</button>
            <button className='secondary-btn'>Cancel</button>
        </div>

    </div>
    <div className={isModalOpen ? 'cart-overlay cart-modal-open' : 'cart-overlay'}></div>
    <div className={isModalOpen ? 'cart-model-container cart-modal-open' : 'cart-model-container'}>
        <div className='cart-model-header'>
            <h3>Confirm and order</h3>
            <Icon icon="gridicons:cross-circle" className='cart-model-close-icon' onClick={() => setIsModalOpen(false)}/>
        </div>
        <p className='cart-container-sub-header'>Please confirm items, save the voucher and send the image of the voucher to us to order</p>
        <div className='cart-model-items-container'>
            <h3>Items</h3>
            <div className='cart-item-items'>
                <div className='cart-item'>
                    <div className='cart-item-details-container'>
                        <div className='cart-item-details'>
                            <p>Name : <span>Nike Air Force 1 '07 </span></p>
                            <p>Size : <span>7 </span></p>
                            <p>Quantity : <span>2</span></p>
                        </div>
                        <p className='cart-item-price'>$ 220</p>
                    </div>
                </div>
                <div className='cart-item'>
                    <div className='cart-item-details-container'>
                        <div className='cart-item-details'>
                            <p>Name : <span>Nike Air Force 1 '07 </span></p>
                            <p>Size : <span>7 </span></p>
                            <p>Quantity : <span>2</span></p>
                        </div>
                        <p className='cart-item-price'>$ 220</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='cart-model-totels-container'>
            <div className='cart-model-total-items'>
                <p>Total number of items</p>
                <p>2</p>
            </div>
            <div className='cart-model-total-price'>
                <p>Total price</p>
                <p>$ 440</p>
            </div>
        </div>

        <div className='cart-model-btns-container'>
            <button className='secondary-btn'>Save Voucher</button>
            <Icon icon="material-symbols:arrow-right-alt-rounded" className='arrow-icon'/>
            <button className='primary-btn'>Send the voucher to order</button>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Cart