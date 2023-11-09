import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  max-width: 700px;
  margin: 2vw auto;
  gap: 1vw;
  
`;

const Button = styled.button`
  background-color: #007acc;
  color: #fff;
  font-size: 2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #00558a;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 2rem;
`;

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Button type="submit">
          <span className="button-label">Search</span>
        </Button>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.query}
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}

export default Searchbar;

// export default class Searchbar extends Component{
// state={
//     query:'',
// };
// handleChange = (e) => {
//     this.setState({ query: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.query);
//   };
// render(){
//     return(
//         <form onSubmit={this.handleSubmit} className="form">
//           <button type="submit" className="button">
//             <span className="button-label">Search</span>
//           </button>

//           <input
//             className="input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.query}
//             onChange={this.handleChange}
//           />
//         </form>
//     )
// }
// }
