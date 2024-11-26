// function UserGreeting(props){
// if(props.isLoggedIn){
//     return <h2>Welcome {props.username} </h2>
// } else{
//     return <h2> Please log in to continue</h2>
// }


// } 
// export default UserGreeting
// conditional rendering if koşulu direkt jsx içinde yazamıyoruz
//Arrow function ile yazıldığında if koşulunu JSX dışında, bileşenin önceki kısmında kullanmak gerekir.
// Alternatif olarak, JSX içinde ternary operator veya && gibi kısa koşul ifadeleri kullanılabilir


 import React from 'react';
 import PropTypes from 'prop-types';

 const UserGreeting = (props) => {
//    return (
//      props.isLoggedIn ? (
//        <h2 className='welcome-message'>Welcome {props.username}</h2>
//      ) : (
//        <h2 className='login-prompt'>Please log in to continue</h2>
//      )
//    );

   const welcomeMessage = <h2 className='welcome-message'>Welcome {props.username}</h2>

   const loginPrompt =   <h2 className='login-prompt'>Please log in to continue</h2>

   return (props.isLoggedIn ? welcomeMessage : loginPrompt)
 };



 UserGreeting.propTypes = {
   isLoggedIn: PropTypes.bool, 
   username: PropTypes.string,
 };
 
 export default UserGreeting; 











