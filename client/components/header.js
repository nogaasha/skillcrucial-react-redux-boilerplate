import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  // const [toggled, setToggle] = useState(false) // хук usestate:  toggled-переменная состояния, toggle-функция, которая изменяет toggled
  // const { props } = useState()
  // useEffect(() => {
  //  if (typeof props.username !== 'undefined') {
  //    setToggle(!toggled)
  //  }
  // }, [props.username])
  // const { username, repository } = useParams()
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>

        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            <Link to="/">Root</Link>
          </button>
        </div>

        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            <Link to="/home/dashboard/">Home</Link>
          </button>
        </div>

        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            <Link to={`/home/repository/${props.username}`}>My Github</Link>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default React.memo(Header)
