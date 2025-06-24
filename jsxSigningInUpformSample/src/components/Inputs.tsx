

function InputFieldsLoop(name: string) {
   for (let i = 0; i < 3; i += 1){
      return (
         
         <input type="text" placeholder={name} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"  />
      )
   }
}
function CheckBox(name: string) {
  
      return (
         
         <input type="checkbox" id={ name } />
      )
   
}

export function InputFields() {
   return (
      <>
         
         <div className="flex flex-col m-3 gap-2">
               {InputFieldsLoop('Name')}
               {InputFieldsLoop('Email')}
               {InputFieldsLoop('Password')}
         </div>
         <div>
            <div className="flex">
            {CheckBox('TermsAndPolocies')}
               <label className="m-1 mb-1" htmlFor="TermsAndPolocies">
               I agree to the <span className="text-orange-500 font-bold">Terms</span> and <span className="text-orange-500 font-bold">Privacy policy</span>
            </label>
         </div>
         </div>
      </>
   )
}

