function Header () {
    return (
        <header >
        <div className='headerLeft'>
          <img width={40} height={40} src="/images/logo.png" alt="" />
          <div className='nameBrand'>
            <h3>React Project</h3>
            <p>Интернет-магазин</p>
          </div>
        </div>
        <ul className='headerRight'>
          <li className='buy'>
            <img width={20} height={20} src="/images/buy.png" alt="" />
            <span>1234 руб.</span>
          </li>
          <li className='user'>
            <img width={20} height={20} src="/images/user1.png" alt="" />
          </li>
        </ul>
      </header>
    )
}

export default Header;