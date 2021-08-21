import React, { Component } from 'react';
import {connect} from 'react-redux'
import CatList from './CatList'
import {fetchCats} from './actions/catActions'

class App extends Component {   

  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }
  
  render() {
    console.log(this.props.catPics)
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.props.loading === true ? <h2>Loading...</h2> : null}
        {this.props.catPics !== undefined ? <CatList catPics={this.props.catPics} loading={this.props.loading}/> : null}
      </div> 
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchCats: () => dispatch(fetchCats())
//   }
// }

export default connect(mapStateToProps, {fetchCats})(App)

// handleLoading = () => {
//   console.log(this.props.loading)
//   if(this.props.loading) {
//     return <div>Loading...</div>
//   } else {
//     return <CatList catPics={this.props.catPics} />
//   }
// }

// render() {
//   return (
//     <div className="App">
//       <h1>CatBook</h1>
//       {this.handleLoading()}
//     </div>
//   );
// }
