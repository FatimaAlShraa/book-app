import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';


class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }

    console.log(this.state.books);
  }

  componentDidMount = async () => {
    const books = await axios.get('http://localhost:3001/books', { params: { email: this.props.auth0.user.email } })
    console.log('books', books.data)
    this.setState({
      books: books.data
    });

    console.log(this.state.books);
  }
  render() {
    return(
      <>
      <Jumbotron>
      <h1>Book Collection</h1>
      <p>
        This is a collection of my favorite books
    </p>
    <Carousel>
      {this.state.books.map(item => {
        return (
          <Carousel.Item>
        <img
          className="fatoom"
          src={item.image_url}
          alt={item.name}
        />
        <Carousel.Caption>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
    </Jumbotron>
    </>
    )
  }
}

export default withAuth0(MyFavoriteBooks)
