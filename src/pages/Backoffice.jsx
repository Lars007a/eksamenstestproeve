import { useLocalStorage } from "@uidotdev/usehooks";
import LoginForm from "../comps/backofficeComps/login/login";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import LoginProtect from "../comps/backofficeComps/loginProtect/loginProtect";
import Nav from "../comps/backofficeComps/nav/nav";
import BackofficeBlog from "../comps/backofficeComps/backofficeBlog/backofficeBlog";
import BackofficeLogout from "../comps/backofficeComps/logout/Logout.jsx";

export default function Backoffice() {
  const [page, setPage] = useState(<BackofficeBlog />); //State bliver sat til den backoffice side der skal vises.
  //Og bliver ændret gemmen navbaren.

  return (
    <>
      {/* bag loginprotect ligger det der skal beskyttes bag login. */}
      <LoginProtect>
        <Nav setter={setPage} />
        {page}
      </LoginProtect>
    </>
  );
}
