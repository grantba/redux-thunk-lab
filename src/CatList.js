// write your CatList component here
import React from 'react'

export default function CatList(props) {

    let getCats = props.catPics.map(cat => {return <img key={cat.id} src={cat.url} alt={cat.id}/>})

    return (
        <div>
            {getCats}
        </div>
    )
}

// class CatList extends React.Component {
//     listCats = () => {
//       return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
//     }
  
//     render() {
//       return (
//         <div>
//           {this.listCats()}
//         </div>
//       )
//     }
//   }