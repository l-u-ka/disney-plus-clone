import { Session } from "next-auth";
import React from "react";
import { DropDown, NavMenu, SignOut, UserImg } from "../styles";
import { signOut } from "next-auth/react";

type Props = {
  session: Session;
};

function SignedInHeader({ session }: Props) {
  const image = session.user?.image as string;
  const name = session.user?.name as string;
  return (
    <>
      <NavMenu>
        <a href="/">
          <img src="/images/home-icon.svg" alt="Home icon" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="Search icon" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="Watch List icon" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="Originals icon" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="Movie icon" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="Series icon" />
          <span>Series</span>
        </a>
      </NavMenu>
      <SignOut>
        {session !==null ? (
          <UserImg src={image} alt={name} />
        ): null}
        <DropDown>
          <span onClick={()=>signOut()}>Sign Out</span>
        </DropDown>
      </SignOut>
    </>
  );
}

export default SignedInHeader;
