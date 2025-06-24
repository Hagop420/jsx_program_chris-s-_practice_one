import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import '../../css/circle.css'




function Icons () {
   return (
      <>
         
         {/* <hr
  style={{
    borderLeft: '6px solid green',
    height: '100px'
  }}
/> */}
        
         <div className="flex justify-evenly">
            <span>
               <span className="absolute z-40 mt-2 pl-3">
                  <FontAwesomeIcon icon={faGoogle} />
            </span>
            <FontAwesomeIcon icon={faCircle} color="black" size="2x" className="relative m-1" />
            </span>
           
            <span>
               <span>
               <FontAwesomeIcon icon={faFacebook} color="#1877F2" size="2x" className=" m-1" />

               </span>
           
           </span>
            <span>
               <span>
               <FontAwesomeIcon icon={faTwitter} color="#1877F2" size="2x" className=" m-1" />

               </span>
           
           </span>
            <span>
               <span>
               <FontAwesomeIcon icon={faInstagram} size="2x" className=" m-1 text-4xl" />

               </span>
           
            </span>
         </div>
            <p className='text-black'>or use your email for registration</p>
            
         

         
    


         
         
      </>
  )
}

export default Icons




