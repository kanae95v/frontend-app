import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id:1,
          title:'Стул серый',
          img:'images-ctul.jpeg',
          desc:'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          categoru: 'chairs',
          price:'12000'
        },
        {
          id:2,
          title:'Стол',
          img:'images-ctul.jpeg',
          desc:'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          categoru: 'chairs',
          price:'49000'
        },
        {
          id:3,
          title:'Диван',
          img:'images-ctul.jpeg',
          desc:'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          categoru: 'chairs',
          price:'150000'
        },
        {
          id:4,
          title:'Лампа',
          img:'images-ctul.jpeg',
          desc:'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          categoru: 'chairs',
          price:'8000'
        },        {
          id:5,
          title:'Стул белый',
          img:'image-lampa2.jpeg',
          desc:'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          categoru: 'chairs',
          price:'12000'
        },
        {
          id:6,
          title:'Стул деревянный',
          img:'images-ctul.jpeg',
          desc:'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          categoru: 'chairs',
          price:'13000'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Items items={this.state.items} onAdd={this.addToOrder}/>
      <Footer/>
    </div>
  )
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
