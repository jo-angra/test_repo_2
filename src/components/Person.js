import React from 'react';


let Person = (props) => {
    console.log(props);
    return (
        <div>
            <h3>Name: {props.name} and Age: {props.age}</h3>
            <h4>Extra Info: {props.childrean}</h4>

        </div>
    );


}



// class Person extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <h3>Name: {this.props.name} and Age: {this.props.age}</h3>
//                 <h4>Extra Info: {this.props.childrean}</h4>
//             </div>
//         );

//     }
// }


export default Person;