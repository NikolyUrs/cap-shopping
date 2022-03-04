function Cart (props) {
    return (
        <div className='cart'>
            <div className='like'>
              <img src="/images/btn-unlike.png" alt="" />
            </div>
            <div className='cartImg'>
              <img width={135} height={120} src={props.imgUrl} alt="" />
            </div>
            <h3>{props.title}</h3>
            <div className='cartLow'>
              <div className='cartSale' >
                <p>Цена:</p>
                <h5>{props.sale} руб.</h5>
              </div>
              <button className='buttonPlus'>
                <img width={20} height={20} src="/images/plus1.png" alt="" className='pls' />
              </button>
            </div>
          </div>
    )
}
export default Cart;




// {
//     "title": "Кепка Jordan Pro Jumpman Snapback Red",
//     "imgUrl": "/images/cap/jordan.webp",
//     "sale": "2500"
// }