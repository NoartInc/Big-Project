import React, { useEffect, useState } from 'react'
import './Shoppingstyled.css'
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from '../../store/actions/product-action';
import { useHistory } from 'react-router-dom';
import { IoApps } from 'react-icons/io5';
import { BsCart4 } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import axios from 'axios';


function Shopping() {
    const history = useHistory();
    const dispatch = useDispatch();
    const {productList, carts} = useSelector((state) => state.productReducer);

    useEffect(() => {
        dispatch(getProduct());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <div className="container">
        <header>
        
        <div className="header-shop">
        <h3>Your Shop Name</h3>
        </div>
        
        <div>
        
        <div className="input-search">
        <input type="text" name="" id="" className="input-text" placeholder="Search"/>
        <button type="button" className="search-button">
        <GoSearch size={15}/>
        {/* <img style={{background: process.env.PUBLIC_URL + '/images/search.png'}} src={process.env.PUBLIC_URL + '/images/search.png'} alt="search icon" /> */}
        </button>
        </div>
        <button type="button" className="shoppingcart" onClick={() => history.push('/carts')}>
        {/* <span>&#128722;</span> */}
        <BsCart4 size={32}/> ({carts.length})
        </button>
        {/* <button type="button" className="shoppingcart" onClick="shoppingcart()"><span>&#128722;</span></button> */}
        </div>
        </header>
        
        
        <main className="content-shop">
        
        <aside className="featured">
        <ul>
        <li className="featured-list">
        FEATURED
        </li>
        <li><a href="/">Category 1</a></li>
        <li><a href="/">Category 2</a></li>
        <li><a href="/">Category 3</a></li>
        <li><a href="/">Category 4</a></li>
        <li><a href="/">Category 5</a></li>
        </ul>
        </aside>
        <div className="line-featured"></div>
        
        <div className="product-list" id="product-list">
        {productList && 
            productList.map((product) => (
                <div className="product-card" key={product.id} onClick={() => history.push(`/product/${product.id}`)}> 
                <div className="product-section">
                <h4>{product.name}</h4>
                <h5>{product.price}</h5>
                <h5>{product.stock}</h5>
                </div>
                </div>
                )
            )
        }
                </div>
                
                <aside className="filter">
                <ul>
                <li className="filter-list">
                ALL
                </li>
                <li><a href="/">Filter 1</a></li>
                <li><a href="/">Filter 2</a></li>
                <li><a href="/">Filter 3</a></li>
                <li><a href="/">Filter 4</a></li>
                <li><a href="/">Filter 5</a></li>
                </ul>
                </aside>
                <div className="line-filter"></div>
                </main>
                
                <div className="pagination">
                <ul>
                <li><a href="/">1</a></li>
                <li><a href="/">2</a></li>
                <li><a href="/">3</a></li>
                <li><a href="/">4</a></li>
                <li><a href="/">5</a></li>
                <li><a href="/">6</a></li>
                <li><a href="/">7</a></li>
                <li><a href="/">8</a></li>
                <li><a href="/">9</a></li>      
                </ul>
                </div>
                
                <div className="footer">
                {/* <img src={process.env.PUBLIC_URL + '/images/Group.png'} alt="footer" /> */}
                <IoApps size={24} />
                </div>
                </div>
                )
            }
            
            export default Shopping