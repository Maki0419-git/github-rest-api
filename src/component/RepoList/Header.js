import { BsGithub } from 'react-icons/bs'


export default function Header({ username, avatar_url }) {
    return (
        <div className="header vertical-center">
            <BsGithub className="github" />
            <h1 className="username">Meoldy’s  Repositories</h1>
        </div>
    )
}