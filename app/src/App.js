import Cart from "./components/Cart";
import Header from "./components/Header";
import Search from "./components/Search";
import evn from "./evn.json"

const obj = evn;
console.log(obj)

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <div className='content'>
          <Search />
          <div className='cap'>
            {obj.map((item, index) => {
              return <Cart title={item.title} imgUrl={item.imgUrl} sale={item.sale} key={index} />
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
