import React, { useEffect } from 'react'
import './Productsstyled.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getProduct, getProductById, setProduct } from '../../store/actions/product-action';
import { IoApps } from 'react-icons/io5';
import {BsCart4} from 'react-icons/bs';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Products() {
    const params = useParams();
    const dispatch = useDispatch();
    const {product, carts} = useSelector((state) => state.productReducer);
    const history = useHistory();
    const addCart = () => {
        dispatch(addToCart())
    }

useEffect(() => {
    dispatch(getProductById(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(product);
  return (
    <div className="container">
        
        <div className="banner2"></div>
        {/* <img style={{background: process.env.PUBLIC_URL + '/images/img1.png'}} src={process.env.PUBLIC_URL + '/images/img1.png'} alt="gambar orang" /> */}
        <img className="img-product" src={product?.image} alt="" />

        <div className="header-box">
            <div className="header-text">
                {/* <h3>Color</h3> */}
                <h3><b>{product?.name}</b></h3>
            </div>
        </div>
        <div className="harga-box">
            <div className="harga-text">
                <h3>Rp.{product?.price}</h3>
                <h1><del>Rp.100000000</del></h1>
            </div>    
        </div>
        <div className="text-box">
            <p dangerouslySetInnerHTML={{__html: product?.description}}></p>
            {/* <p>{product?.productDesc}</p> */}
            {/* <p>Kacamata tampan dan berani</p> */}
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
        </div>
        <div className="size">
            <h3>Size:</h3>
        </div>
        <select className="select-size" value={product?.size}>
            <option value="l">Large</option>
            <option value="m">Medium</option>
            <option value="s">Small</option>
            <option value="xs">Extra Small</option>
        </select>

        <button type="button" className="addcart" onClick={addCart}>ADD TO CART</button>
        <button type="button" className="kiri"><span>&#8678;</span> </button>
        <button type="button" className="kanan"><span>&#8680;</span> </button>
        
        <button type="button" className="shoppingcart" onClick={() => history.push('/carts')}>
            {/* <span>&#128722;</span> */}
            <BsCart4 size={32}/> ({carts.length})
        </button>
        
        <button onClick={() => history.goBack()} className="goback" id="goback">GO BACK</button>

        <div className="line3"></div>

        <div className="cotton-box">
            <p>Mens</p>
            <p>100% Cotton</p>
        </div>
        <div className="footer">
            {/* <img src={process.env.PUBLIC_URL + '/images/Group.png'} alt="footer" /> */}
            <IoApps size={24} />
        </div>

    </div>
  )
}

export default Products