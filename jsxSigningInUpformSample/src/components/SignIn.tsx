import Buttons from './ButtonsFlexed'
import CircularIcons from './CircularIcons'
import { InputFields } from './Inputs'
import img from '../../css/okIn.png'
export function SignIn() {
   return (
      <>
         <form action="" className="flex bg-cyan-500 w-auto  h-screen">
            <div className="w-1/2 flex flex-col justify-center items-center bg-cyan-500 p-8">
               <h1 className="uppercase text-orange-300 font-bold">create account</h1>
               <CircularIcons/>
               <InputFields />
               <Buttons />
            </div>
            <div className="w-1/2">
      <img src={img} alt="Signup Visual" className="w-full h-full object-cover" />
    </div>
         </form>
      </>
   )
}
export default SignIn