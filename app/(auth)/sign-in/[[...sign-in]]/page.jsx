import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page(){
  return(
    <div className="h-[100vh] w-full flex justify-center items-center">
      <SignIn appearance={{baseTheme:dark}}/>
    </div>
  ) 
}