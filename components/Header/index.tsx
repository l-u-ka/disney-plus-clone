import React from "react";
import { Nav, Logo, LoginContainer, Login } from "./styles";
import { useSession, signIn, signOut } from "next-auth/react";
import SignedInHeader from "./SignedInHeader";

function Header() {
  const { data: session, status } = useSession();

  const renderHeader = () => {
    //if logged in, show the logged in header
    if (session) return (
      <SignedInHeader session={session}/>
    )
    
    return (
      <LoginContainer>
        <Login onClick={()=>signIn()}>Login</Login>
      </LoginContainer>
    );
  };

  return (
    <Nav>
      <Logo
        src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
        alt="Disney Logo"
      />
      {renderHeader()}
    </Nav>
  );
}

export default Header;
