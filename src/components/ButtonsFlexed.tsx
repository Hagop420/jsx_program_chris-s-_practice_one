import { useEffect, useState } from "react"


export function Buttons() {
  
   const [buttonState, setButtonState] = useState<string>('')

   useEffect(() => {
      setButtonState("bg-red-300");
    }, []);
   return (
      <>

         <div className={` flex justify-center`}>
         <button className={buttonState}>Sign Up</button>
      <button className="capitalize bg-red-300">sign in</button>
         </div>

      </>
   )
}


export default Buttons