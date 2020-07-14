import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from './head'

const Dashboard = () => {
  const [username, setUsername] = useState('')
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
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          id="search-button"
          type="button"
        >
          <Link to={`/home/repositories/${username}`}>Go To List Repositories</Link>
        </button>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
