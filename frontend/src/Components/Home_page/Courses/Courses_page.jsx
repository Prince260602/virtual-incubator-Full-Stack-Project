// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Courses.css";
// import axios from "axios";
// import Loader from './Loader';
// import FirstPart from '../FirstPart';
// import Features from '../Features';
// import Sliding from '../Sliding_companies';
// import FAQ from "../../Home_Page_FAQ/FAQ";



// const Courses = () => {
  
//   const [courses,setcourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to the top of the page on component load
//   }, []); 
//   useEffect(()=>{
//     setTimeout(()=>{
//       axios.get("https://ten-official-1.onrender.com/api/users/courses")
//      .then((res)=> setcourses(res.data.data))
//       // setcourses(res) 
//      .catch((err)=>console.log(err))
    
//     setLoading(false);
//   }, 2000);
//   },[])
//   if (loading) {
//     return <Loader />;
//   }

//   return (
    
//     <div className="Courses-cont">
//     <FirstPart/>
//     <Features/>
//     <Sliding/>
    
//     {/* <Courses/> */}
//       <h1 className=" text-2xl md:text-3xl font-bold p-3">Let the journey of self-learning begin</h1>
//       <div className="courses-wrapper">
//         {courses.map((course, index) => (
//           <div key={index} className="course-card">
//             <img
//               src={course.imgSrc}
//               alt={course.title}
//               className="course-img h-48"
//             />
//             <h3>{course.title}</h3>
//             <div> Price : <span className="text-red-600 font-semibold text-lg"> {course.price} </span> Rs </div>

           
//               <Link to={`/Courses/${course._id}`}>
//               <button className="course-btn">Get this Course</button>
//               </Link>
    
//           </div>
//         ))}
//       </div>
//       <FAQ/>
//     </div>
//   );
// };

// export default Courses;

































// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Courses.css";
// import axios from "axios";
// import Loader from './Loader';
// import FirstPart from '../FirstPart';
// import Features from '../Features';
// import Sliding from '../Sliding_companies';
// import FAQ from "../../Home_Page_FAQ/FAQ";
// import CFAQ from "../../Course_Page_FAQ/CFAQ";



// const Courses = () => {
  
//   const [courses,setcourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []); 
//   useEffect(()=>{
//     setTimeout(()=>{
//       axios.get("https://testing-cndo.onrender.com/api/users/courses")
//       // axios.get("https://testing-cndo.onrender.com/api/users/courses")
//      .then((res)=> setcourses(res.data.data))
//       // setcourses(res) 
//      .catch((err)=>console.log(err))
    
//     setLoading(false);
//   }, 2000);
//   },[])
//   if (loading) {
//     return <Loader />;
//   }

//   return (
    
//     <div className="Courses-cont">
//     <FirstPart/>
//     <Features/>
//     <Sliding/>
    
//     {/* <Courses/> */}
//       <h1 className=" text-2xl md:text-3xl font-bold p-3">Let the journey of self-learning begin</h1>
//  {/* <div className="courses-wrapper">
//         {courses.map((course, index) => (
//           <div key={index} className="course-card">
//              <img
//            src={`https://testing-cndo.onrender.com/${course.imgSrc}`}

//             alt={course.title}
//             className="course-img h-48"
//           />
//             <h3>{course.title}</h3>
//             <div> Price : <span className="text-red-600 font-semibold text-lg"> {course.price} </span> Rs </div>
//               <Link to={`/Courses/${course._id}`}>
//               <button className="course-btn">Get this Course</button>
//               </Link>
//           </div>
//         ))}
//       </div> */}




      
// <div className="courses-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
//   {courses.map((course, index) => (
//     <div key={index} className="course-card w-75 h-95 flex flex-col items-center border rounded-lg shadow-md overflow-hidden"> 
//       <div className="relative w-full h-40 overflow-hidden"> 
//         <img
//           // src={`https://testing-cndo.onrender.com/${course.imgSrc}`} 
//           src={course.imgSrc}
//           alt={course.title}
//           className="course-img w-full h-full object-cover" 
//         />
//       </div>
//       <h3 className="mt-2 text-center font-semibold">{course.title}</h3>
//       <div className="mb-2">
//         Price : <span className="text-red-600 font-semibold text-lg">{course.price} Rs</span>
//       </div>
//       <Link to={`/Courses/${course._id}`}>
//         <button className="course-btn bg-blue-500 text-white rounded-md px-4 py-2">Get this Course</button>
//       </Link>
//     </div>
//   ))}
// </div>


//       <CFAQ/>
//     </div>
//   );
// };

// export default Courses;










import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Courses.css";
import axios from "axios";
import Loader from './Loader'


const Courses = () => {
  
  const [courses,setcourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      axios.get("https://testing-cndo.onrender.com/api/users/courses")
     .then((res)=> setcourses(res.data.data))
      // setcourses(res) 
     .catch((err)=>console.log(err))
    
    setLoading(false);
  }, 2000);
  },[])
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="Courses-cont">
      <h1 className=" text-2xl md:text-3xl font-bold p-3">Let the journey of self-learning begin</h1>
      <div className="courses-wrapper">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img
              src={course.imgSrc}
              alt={course.title}
              className="course-img h-48"
            />
            <h3>{course.title}</h3>
            <div> Price : <span className="text-red-600 font-semibold text-lg"> {course.price} </span> Rs </div>

           
              <Link to={`/Courses/${course._id}`}>
              <button className="course-btn">Get this Course</button>
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;