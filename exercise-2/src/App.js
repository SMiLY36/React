import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

  }
   
   addSomeCarrots = () => {
    this.setState({ items: [...this.state.items, {id: 5, value : "Carrots", qty: Math.round(Math.random() * (10 - 1) + 1)}]})
   }

   addSomeStrawberries = () => {
    this.setState({ items: [...this.state.items, {id: 5, value : "Strawberries", qty: Math.round(Math.random() * (10 - 1) + 1)}]})
   }

   addSomeYogurt = () => {
    this.setState({ items: [...this.state.items, {id: 5, value : "Yogurt", qty: Math.round(Math.random() * (10 - 1) + 1)}]})
   }

   addSomeBeer = () => {
    this.setState({ items: [...this.state.items, {id: 5, value : "Beer", qty: Math.round(Math.random() * (10 - 1) + 1)}]})
   }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ this.addSomeCarrots }>Carrots</button>
      <button onClick={ this.addSomeStrawberries }>Strawberries</button>
      <button onClick={ this.addSomeYogurt }>Yogurt</button>
      <button onClick={ this.addSomeBeer }>Beer</button>
    </div>
  }
}

export default App;