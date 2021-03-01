import React from 'react'
import './HomePage.css'

function HomePage() {

    return (
        <div>
            <div className='category-selector-container'>
                <div className="category-container jewelry">
                    <img src="https://www.boutiqueottoman.com/wp-content/uploads/2018/11/Zultanite-Color-Change-Turkish-Stone-Zultania-Square-Jewelry-Set-With-Swarovski.jpg"/>
                    <h4>Jewelry</h4>
                </div>
                <div className="category-container home-decor">
                    <img src="https://cdn.shopify.com/s/files/1/0865/0856/products/khdvl9ydajl5yxjscme8_1800x.jpg?v=1584719899"/>
                    <h4>Home Decor</h4>
                </div>
                <div className="category-container clothing">
                    <img src="https://www.thoughtco.com/thmb/hdPUIi6hKOZG3xnsj7fqZHyzXag=/2750x2750/smart/filters:no_upscale()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg"/>
                    <h4>Clothing</h4>
                </div>
                <div className="category-container craft-supplies">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/81-sWxUwIvL._AC_SL1350_.jpg"/>
                    <h4>Craft Supplies</h4>
                </div>
                <div className="category-container wall-art">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/71EJOovmCYL._AC_SL1100_.jpg"/>
                    <h4>Wall Art</h4>
                </div>
                <div className="category-container entertainment">
                    <img src="https://i.ebayimg.com/images/g/ih4AAOSwvu5bjP0U/s-l300.jpg"/>
                    <h4>Entertainment</h4>
                </div>
            </div>
            <div className='preview jewelry'>
                <h3>Jewelry</h3>
                <div className='item item-1'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSh7DwoRXzpRBQAkYK0INxzM2-IWS-mhwoZMT3cxR5jbX_JtI9R7hA6qcRTnuwUCWemuarVc&usqp=CAc"/>
                    <p>$499.99</p>
                </div>
                <div className='item item-2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KXASVIz_h-vozVSD64mynvyUZn8Xtogy_Q0ZzTRymlKS6d9_hR5siE1EJty7nTyMN4JdEBg&usqp=CAc"/>
                    <p>$199.99</p>
                </div>
                <div className='item item-3'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GYssW_zp3iXlDoaa-wSJv3eZ4fn548yx5Bi5z8AFwO35oUx1DvaAJtaZchNteUZH5L6WaZiZ&usqp=CAc"/>
                    <p>$699.99</p>
                </div>
                <div className='item item-4'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSy_lifCsnNDPN5o84zMpuvW1Xa80wuDgkQpXSdZI6oGIJICXlJ3YiD6W8qTlX7O3CRjD-lJU&usqp=CAc"/>
                    <p>$249.99</p>
                </div>
                <div className='item item-5'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-1gb6lAc_zxFMZyW3z1DRt2Nvso4scRYi81gpKJF029bsAAGaqjuBtsqA8oYmY0EVLQilCw&usqp=CAc"/>
                    <p>$449.99</p>
                </div>
                <div className='item item-6'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPu-QtqcTwkduQaIc5B4IGQ_ZS2gCG9Gmgyrg-mjBUO6dXOFKo04EdEOuBwvNp3WPlEE0gcZlk&usqp=CAc"/>
                    <p>$99.99</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage