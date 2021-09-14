import { Link } from "react-router-dom"

export const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/chats">Чат</Link>
                </li>
                <li>
                    <Link to="/profile">Профиль</Link>
                </li>
            </ul>
        </nav>
    )
}