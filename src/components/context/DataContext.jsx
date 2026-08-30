import React, { createContext, useEffect, useState } from 'react';
import createPost from '../service/api';

export const DATA = createContext([]);

function DataContext({ children }) {
  const [mehsul, setMehsul] = useState([]);

  useEffect(() => {
    createPost()
      .then((res) => {
        console.log(res);
        setMehsul(res); // Məlumatı state-ə yazırıq
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <DATA.Provider value={{ mehsul, setMehsul }}>
      {children}
    </DATA.Provider>
  );
}

export default DataContext;





// import { createContext, useEffect, useState } from "react"
// import { getestapi, getpost, getuser } from "../../Service/Api"

// export const DATA = createContext([])
// function Datacontext({children}) {
//     const [mehsul, setMehsul] = useState([])
//     const [user, setUser] = useState([])
//     useEffect(() => {
//         getpost().then(res => setMehsul(res))
//         getuser().then(res => setUser(res))
//         getestapi().then(res => console.log(res)
//         )
//     }, [])
//   return (
//     <>
//          <DATA.Provider value={{mehsul, user}}>
//             {children}
//          </DATA.Provider>
//     </>
//   )
// }

// export default Datacontext

