import { Link } from "react-router";

export default function Header() {
    return (
        <>
            <header>
                {/* <!-- Navigation --> */}
                <nav>
                    <Link className="home" to="/"> <img src="./images/logo.png" alt="logo" /> </Link>
                    <Link to="/catalog">Catalog</Link>
                    {/* <!-- Logged-in users --> */}
                    <div id="user">
                        <Link href="#">Add Game</Link>
                        <Link href="#">Logout</Link>
                    </div>
                    {/* <!-- Guest users --> */}
                    <div id="guest">
                        <Link href="#">Login</Link>
                        <Link href="#">Register</Link>
                    </div>
                </nav>
            </header>
        </>
    );
}