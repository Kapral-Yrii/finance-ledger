// import style from './Button.module.scss'
// import { useState, useEffect } from 'react'

// export default function Button({ type , children }) {
//     const [propStyle, setPropStyle] = useState(null)
//     useEffect(() => {
//         switch (type) {
//             case 'base':
//                 setPropStyle(style.base)
//                 break;
//             case 'ligthGreen':
//                 setPropStyle(style.lightGreen)
//                 break;
//             case 'ligthBlue':
//                 setPropStyle(style.ligthBlue)
//                 break;
//             default:
//                 return
//         }
//     }, [type])
//     return (
//         <button
//             type='button'
//             className={propStyle}
//             // onClick={}
//         >
//             {children}
//         </button>
//     )
// }