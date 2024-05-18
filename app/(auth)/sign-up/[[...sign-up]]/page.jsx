import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";


export default function Page(){
  return(
    <div className="h-[100vh] w-full flex justify-center items-center">
      <SignUp appearance={{baseTheme:dark}}/>
    </div>
  ) 
}