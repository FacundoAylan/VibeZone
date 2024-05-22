import { RedirectToSignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default async function Home(){

  return (
    <div>
      <SignedIn>
        <div className="h-screen">
          <h1>Home Page</h1>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}