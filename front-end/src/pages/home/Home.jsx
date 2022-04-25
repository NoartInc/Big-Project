import React from 'react'
import { IoApps } from 'react-icons/io5'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "./Homestyled.css"

function Home() {
    const history = useHistory();
    const shopping = () => {
        history.push("/shopping");
    }
  return (
    <div className="container">
        <div className="banner"></div>
        <div className="header">
            <h3 className="title1">Choose <b>as you want</b></h3>
            <h3 className="title1">Pay <b>as you can</b></h3>
        </div>

        <div className="latest" onclick="latestButtonClick()">LATEST</div>
        <div className="all" onclick="allButtonClick()">ALL</div>
        <div className="line2"></div>
        
        <div className="line1"></div>
        <button className="button-shop-now" onClick={shopping}>Shop Now</button>
        
        <div className="header2">
            <h3 className="title2"><b>New Concept</b> <small>of Online Shopping</small></h3>
        </div>
        <h5 className="text-isi">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia vero vitae, officiis excepturi eius ad, iure deleniti repudiandae eveniet sapiente fugiat eum similique molestias facilis, amet totam quis itaque corporis.</h5>
        
        <div className="rectangle rectangle1">
            
            <div className="rectangle-content">
                
                <div className="rectangle-text">
                    <h5>KEYNOTE</h5>
                    <h6>SUBTITLE</h6>
                </div>
            </div>
        </div>
        <div className="rectangle rectangle2">
           <div className="rectangle-content">
                
                <div className="rectangle-text">
                    <h5>ACTIVITIES</h5>
                    <h6>SUBTITLE</h6>
                </div>
            </div>
        </div>
        <div className="rectangle rectangle3">
            <div className="rectangle-content">
                
                <div className="rectangle-text">
                    <h5>GALLERY</h5>
                    <h6>SUBTITLE</h6>
                </div>
            </div>
        </div>
        <div className="footer">
            {/* <img src={process.env.PUBLIC_URL + '/images/Group.png'} alt="footer" /> */}
            <IoApps size={24} />
        </div>
    </div>
  )
}

export default Home