import Logo from "./assets/Logo";
import MenuIcon from "./assets/MenuIcon";
import MainNav from "./MainNav";

export default function Header(){

    return(
        <header className="bg-slate-50 w-full p-3 h-20 fixed top-0 z-30 flex justify-between align-baseline">
            <Logo />
            <MainNav />
            <MenuIcon />
        </header>
    )
}