import React,{useState ,useEffect} from 'react';
import Friend from './Components/Friend/Friend';
import Cart from './Components/Cart/Cart';
import './App.css';

function App() {

   const [friends, setFriends] = useState([]);

   useEffect(() =>{
    fetch('https://api.mocki.io/v1/17be48c3')
    .then(res => res.json())
    .then(data => setFriends(data))
   },[])

   const [cart, setCart] = useState([]);


   const handleAddFriend=(friend)=>{ 
     console.log('added friend');
     const newCart = [...cart, friend];
     setCart(newCart);
   }

  return (
    <div className="App">
  
        <div>
        <h1>Friends : {friends.length}</h1>
        
        <Cart cart={cart}></Cart>
       
          {
            friends.map(friend => <Friend friend={friend}  handleAddFriend={handleAddFriend} key={friend.cell}></Friend> )
          }
        </div>
     
    </div>
  );
}

export default App;
