import React from 'react'

const fruits = [{ id:1, name:"apple", calories:95},
   { id:2, name:"orange",calories:45},
   { id:3, name:"banana",calories:105},
   { id:4, name:"coconut", calories:159},
   { id:5, name:"pineapple",calories:37} ]

//  fruits.sort ((a,b) =>a.name.localeCompare(b.name)); // alfabetic olarak sıralar
//  fruits.sort ((a,b) =>b.name.localeCompare(a.name)); // tersten alfabetik sırayla
//  fruits.sort((a,b) => a.calories- b.calories); // sayısal olarak sıralama
//  fruits.sort ((a,b) => b.calories -a.calories); // büyükten küçüğe doğru sıralama

 const lowCalFruits = fruits.filter(fruits => fruits.calories <100);
 const highCalFruits = fruits.filter(fruits => fruits.calories>=100)


 const listItems = lowCalFruits.map(fruit => (
   <li key={fruit.id}>
     {fruit.name}: &nbsp;<b>{fruit.calories}</b>
   </li>
 ));

 const listItems2 = highCalFruits.map(fruit => (
   <li key={fruit.id}>
     {fruit.name}: &nbsp;<b>{fruit.calories}</b>
   </li>
 ));
 

 const List = () => {
   return (
     <div>
       <h3 className='fruit-calorie'>Low Calorie Fruits</h3>
       <ol>
         {listItems}
       </ol>
 
       <h3 className='fruit-calorie'>High Calorie Fruits</h3>
       <ol>
         {listItems2}
       </ol>
     </div>
   );
 }

export default List
