'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import { SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import {Logout} from '@mui/icons-material';
import { dark } from "@clerk/themes";
import Loader from "@components/Loader";

export default function LeftSideBar(){ 

  // const {isSignedIn, user, isLoaded }= useUser();
  // const [loading, setLoading]= React.useState(true);
  // const [userData, setUserData]=React.useState({});

  // const getUser= async()=>{
  //   if (isSignedIn) {
  //     const{id,firstName,lastName,imageUrl,emailAddresses,username}= user
  //     createOrUpdateUser(id,firstName,lastName,imageUrl,emailAddresses,username);
  //     const response = await fetch(`/api/user/${user.id}`);
  //     const data = await response.json()
  //     setUserData(data);
  //     setLoading(false);
  //   }
  // }

  // React.useEffect(()=>{
  //   getUser()
  // },[user])
  // loading || !isLoaded? <Loader/>:
  return (
    <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden custom-scrollbar">
      <Link href='/'>
        {/* <Image
          src={userData?.profilePhoto}
          alt='logo'
          width={200}
          height={200}
        /> */}
      </Link>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-light-1">
          <Link href='/'>
            {/* <Image
              src='/assets/phucmai.png'
              alt='profile photo'
              width={50}
              height={50}
              className='rounded-full'
            /> */}
          </Link>
          {/* <p className="text-small-bold">{userData?.firstName} {userData?.lastName}</p> */}
        </div>
        <div className="flex text-light-1 justify-between">
          <div className="flex flex-col items-center">
            {/* <p className="text-base-bold">{userData?.posts?.length}</p> */}
            <p className="text-tiny-medium">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            {/* <p className="text-base-bold">{userData?.followers?.length}</p> */}
            <p className="text-tiny-medium">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            {/* <p className="text-base-bold">{userData?.following?.length}</p> */}
            <p className="text-tiny-medium">Following</p>
          </div>
        </div>
        <hr/>
        <Menu/>
        <hr/>
        <div className="flex gap-4 items-center">
          <UserButton appearance={{baseTheme:dark}}/>
          <p className="text-light-1 text-body-bold">Manage Account</p>
        </div>
        <SignedIn>
          <SignInButton>
            <div className="flex cursor-pointer gap-4 items-center">
              <Logout sx={{color:'white', fontSize:'32px'}}/>
              <p className="text-body-bold text-light-1">Log Out</p>
            </div>
          </SignInButton>
        </SignedIn>
      </div>
    </div>
  )
}