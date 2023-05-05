
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';

// //-- Import authorization class --//
// import Auth from '../utils/auth';

// const SignUp = (props) => {
//     const [formState, setFormState] = useState({ username: '', email: '', password: ''});
//     const [addUser, { error, data }] = useMutation(ADD_USER);

//     //-- update state based on form input changes --//
//     const handleChange = (event) => {
//         const { name, value } = event.target;

//         setFormState({
//             ...formState,
//             [name]: value,
//         });
//     };

//     //-- submit form --//
//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         console.log(formState);

//         try {
//             const { data } = await addUser({
//                 variables: {...formState},
//             });

//             Auth.login(data.addUser.token);
//         } catch (e) {
//             console.error(e);
//         }

//         //-- If successful, clear form values --//
//         setFormState({
//             username: '',
//             email: '',
//             password: ''
//         });
//     };

//     return (
//         <main  className='container min-vh-100 d-flex justify-content-center align-items-center'>
        
//           <section className='col-6'>
//             <div className='text-center'>
//                 <h1>Game App!</h1>
//                 <h6>Share Games, AnyTime, Anywhere</h6>
//             </div>
//             <div className="card text-center">
//               <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
//               <div className="card-body">
//                 {data ? (
//                   <p>
//                     Success! You may now head{' '}
//                     <Link to="/">back to the homepage.</Link>
//                   </p>
//                 ) : (
//                   <form onSubmit={handleFormSubmit}>
//                     <div className='row justify-content-center m-2'>
//                       <input
//                         className="form-input text-center"
//                         placeholder="Your Email..."
//                         name="email"
//                         type="email"
//                         value={formState.email}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className='row justify-content-center m-2'>
//                       <input
//                         className="form-input text-center"
//                         placeholder="Create Username..."
//                         name="username"
//                         type="text"
//                         value={formState.username}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className='row justify-content-center m-2'>
//                       <input
//                         className="form-input text-center"
//                         placeholder="Create Password..."
//                         name="password"
//                         type="password"
//                         value={formState.password}
//                         onChange={handleChange}
//                       />
//                     </div>

//                     <button
//                       className="row btn btn-block btn-primary"
//                       style={{ cursor: 'pointer' }}
//                       type="submit"
//                     >
//                       Sign Up!
//                     </button>
//                   </form>
//                 )}
    
//                 {error && (
//                   <div className="my-3 p-3 bg-danger text-white">
//                     {error.message}
//                   </div>
//                 )}
//               </div>
//             </div>
          

//           </section>

//       </main>
//     );


// };


// export default SignUp;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import AnimatedPage from '../components/AnimatedPage';

//-- Import authorization class --//
import Auth from '../utils/auth';

const SignUp = () => {
    const [formState, setFormState] = useState({ email: '', username: '', password: ''});
    const [addUser, { error, data }] = useMutation(ADD_USER);

    //-- update state based on form input changes --//
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    //-- submit form --//
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addUser({
                variables: {...formState},
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            // console.error(e);
        }

        //-- If successful, clear form values --//
        setFormState({
            username: '',
            email: '',
            password: ''
        });
    };

    return (
      <AnimatedPage>
        <main  className='container min-vh-100 d-flex justify-content-center align-items-center'>
       
       <section className='col-6'>
         <div className='text-center'>
             <div>
               <i className="fa-sharp fa-solid fa-ghost fa-4x m-2"></i>
               <i className="fa-solid fa-dice-five fa-4x m-2"></i>
               <i className="fa-solid fa-headset fa-4x m-2"></i>
             </div>
             <h1>GameShare.</h1>
             <h6>Share Games, AnyTime, Anywhere</h6>
         </div>
         <div className="card text-center">
           <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
           <div className="card-body">
             {data ? (
               <p>
                 Success! You may now head{' '}
                 <Link to="/">back to the homepage.</Link>
               </p>
             ) : (
               <form onSubmit={handleFormSubmit}>
                 <div className='row justify-content-center m-2'>
                   <input
                     className="form-input text-center"
                     placeholder="Your Email..."
                     name="email"
                     type="email"
                     value={formState.email}
                     onChange={handleChange}
                   />
                 </div>
                 <div className='row justify-content-center m-2'>
                   <input
                     className="form-input text-center"
                     placeholder="Create Username..."
                     name="username"
                     type="text"
                     value={formState.username}
                     onChange={handleChange}
                   />
                 </div>
                 <div className='row justify-content-center m-2'>
                   <input
                     className="form-input text-center"
                     placeholder="Create Password..."
                     name="password"
                     type="password"
                     value={formState.password}
                     onChange={handleChange}
                   />
                 </div>

                 <button
                   className="row btn btn-block btn-primary"
                   style={{ cursor: 'pointer' }}
                   type="submit"
                 >
                   Sign Up!
                 </button>
               </form>
             )}
 
             {error && (
               <div className="my-3 p-3 bg-danger text-white">
                 {error.message}
               </div>
             )}
           </div>
         </div>
       

       </section>

   </main>

      </AnimatedPage>
        
    );


};


export default SignUp;