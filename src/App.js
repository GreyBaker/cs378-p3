import './App.css';
import MenuLine from './components/MenuLine';
import Header from './components/Header'
import OrderSummary from './components/OrderSummary'
import React, {useState, useEffect} from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {

  
  const [lineItems, setLineItems] = useState({});
  const [totalSum, changeSum] = useState(0);


  function updateLineItem(id, newCount) {
    setLineItems(prevState => ({...prevState,
      [id]: newCount
    }));
  }

  function reset() {
    const initialLineItems = {};
    menuItems.forEach(item => {
      initialLineItems[item.id] = 0;
    });
    setLineItems(initialLineItems)

  }

  function order() {

    if (totalSum === 0) {
      alert('No items in cart');
      return;
    }

    var output = "Order placed!\n";

    menuItems.forEach(item => {
      if (lineItems[item.id] > 0) {
        output = output + JSON.stringify(lineItems[item.id]) + " " + item.title + " ";
      }
    });

    alert(output);

  }

  useEffect(() => {
    const initialLineItems = {};
    menuItems.forEach(item => {
      initialLineItems[item.id] = 0;
    });
    setLineItems(initialLineItems)
  }, [])

  useEffect(() => {
    var summation = 0;
    menuItems.forEach(item => {
      summation = summation + item.price * lineItems[item.id];
    })
    changeSum(summation);
  }, [lineItems])
  

  return (
    <div>
      <Header logo_img="https://www.oscampuscafe.com/wp-content/uploads/2019/11/os-campus-cafe-logo-2x.png" logo_img_alt="O's Campus Cafe" subtitle="UT's Premier Sit-Down Cafe" under_subtitle="Food From Home, Moments Away"/>
      <div className="menu">
        {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
        {menuItems.map(item => (
            <MenuLine
                title={item.title} 
                content={item.description} 
                image_path={`./images/${item.imageName}`} 
                price={item.price} 
                count={lineItems[item.id]} 
                setCount={updateLineItem} 
                id={item.id}
            />
        ))}
        <OrderSummary totalSum={totalSum} reset={reset} order={order} />
      </div>
    </div>
  );
}

export default App;
