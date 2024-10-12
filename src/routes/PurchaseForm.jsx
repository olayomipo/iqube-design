


// import { Link, Form, redirect } from 'react-router-dom';

// import classes from './NewPost.module.css';
// import Modal from '../components/Modal';

// const url = 'http://localhost:8080/posts';

// function NewPost() {
//   return (
//     <Modal>
//       <Form method="post" className={classes.form}>
//         <p>
//           <label htmlFor="body">Text</label>
//           <textarea id="body" name="body" required rows={3}/>
//         </p>
//         <p>
//           <label htmlFor="name">Your name</label>
//           <input type="text" id="name" name="author" required/>
//         </p>
//         <p className={classes.actions}>
//           <Link to=".." type="button"> Cancel </Link>
//           <button> Submit </button>
//         </p>
//       </Form>
//     </Modal>
    
//   );
// }

// export default NewPost;

// export async function action({ request }){
//   const formData = await request.formData();
//   const postData = Object.fromEntries(formData); // { body: '...', author : '...' }

//   await fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(postData),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   return redirect('/');
// }

import BreadCrumb from '../components/BreadCrumb';
import { Outlet } from "react-router-dom";

function PurchaseForm(){
    return(
        <div className="h-screen min-h-screen flex items-center justify-center bg-transparent">
            <div className="flex-col gap-8">
                <h1 className="lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-3xl text-heading-2 font-bold text-left text-[#4E598C] leading-tight">
                        Complete your Purchase
                </h1>         
                <BreadCrumb />
                <div className="text-[#4E598C]">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default PurchaseForm;