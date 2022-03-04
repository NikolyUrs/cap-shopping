function ShoppingCart () {
    return (
        <div style={{display: 'none'}} className='overlay'>
          <div className='shoppingCart'>
            <h1>Корзина</h1>
            <div className='basket'>
              <div className='basketItem'>
                <img width={40} height={40} src="/images/cepka1.webp" alt="" className='basketImg' />
                <div className='basketInfo'>
                  <p className='basketP'>Кепка Jordan Pro Jumpman Snapback</p>
                  <b>4000 руб.</b>
                </div>
                <button className='close'>
                  <img width={25} height={25} src="/images/close.png" alt="" />
                </button>
              </div>
            </div>
            <ul className='cartTotal'>
              <li className='liCart'>
                <p>Цена:</p>
                <div className='cartBottom'></div>
                <span>4000 руб.</span>
              </li>
              <li className='liCart'>
                <p>Налог:</p>
                <div className='cartBottom'></div>
                <span>400 руб.</span>
              </li>
            </ul>
            <button className='order'>
              Оформить заказ
              <img width={20} height={20} src="/images/arrow.png" alt="" className='arrow'/>
            </button>
          </div>
        </div>
    )
}

export default ShoppingCart;