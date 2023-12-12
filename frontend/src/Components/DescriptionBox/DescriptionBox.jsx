import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online 
            platform that facilitates the buying and selling of 
            goods and services over the internet. It enables 
            businesses to showcase their products or services to a 
            global audience, and customers can browse, select, and 
            purchase items online. E-commerce websites often provide a 
            user-friendly interface, secure payment options, and various 
            features such as product descriptions, reviews, and 
            shopping carts to enhance the online shopping experience.</p>
            <p>Popular examples of e-commerce websites include 
                Amazon, eBay, Shopify, and many individual businesses that 
                operate online stores. E-commerce has become a significant 
                aspect of the modern retail landscape, offering convenience and 
                accessibility to both businesses and consumers.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
