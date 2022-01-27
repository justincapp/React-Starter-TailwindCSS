import {
  ExclamationIcon,
  HomeIcon,
  MenuAlt2Icon,
  MenuIcon,
  PlusIcon,
  UserIcon,
  XCircleIcon,
  XIcon,
} from "@heroicons/react/solid";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "../components/AppBar";
import Feed from "../components/Feed";
import Menu from "../components/Menu";
import SideNav from "../components/SideNav";
import { AuthContext } from "../helpers/AuthContext";

export default function Home() {
  const { authState } = useContext(AuthContext);
  const [close, setClose] = useState(false);

  return (
    <div className="bg-[#0d0b13] ">
   
    </div>
  );
}
