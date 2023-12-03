import {Link} from 'react-router-dom';

export default function Header({
    navbar,
    title,
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-10">
            <h1 className="mt-10 text-center text-3xl font-extrabold text--1000">
                {title}
            </h1>
            <nav className="mt-10 ml-4 flex justify-start">
                <button className="text-3xl font-extrabold text-gray-1000 focus:outline-none">
                    {navbar}
                </button>
            </nav>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}