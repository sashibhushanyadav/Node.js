// FOR NODE JS

// class expressions
let sashi = class {
  constructor(kg, gram) {
    this.weight = kg + gram / 1000;
  }
};
console.log(new sashi(64, 450).weight);

// class declarations
class bhushan {
  constructor(kg, gram) {
    this.kg = kg;
    this.gram = gram / 1000;
  }
  weight() {
    return this.kg + this.gram;
  }
}
console.log(new bhushan(60, 400).weight());

// REACT CLASS COMPONENT (JUST SYNTAX)

// class hello extends helloComponent {
//   constructor() {}
//   render() {
//     return (
//       <div>
//         <button>HEY</button>
//       </div>
//     );
//   }
// }
