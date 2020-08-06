import React from 'react'
import { Link } from 'react-router-dom'
import { connect, useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateUsername } from '../redux/reducers/repositories'
import Head from './head'

const Dashboard = () => {
  const dispatch = useDispatch()
  const username = useSelector((store) => store.repositories.username)
  // const [username, setUsername] = useState('')
  return (
    <div>
      <Head title="Hello" />
      1. This is First page
      <div>Enter Your repositories name:</div>
      <div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="input-field"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            dispatch(updateUsername(e.target.value))
          }}
        />
        <div
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          id="search-button"
        >
          <Link to={`/${username}`}>Go To List Repositories</Link>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
