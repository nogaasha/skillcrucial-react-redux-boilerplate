import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import Head from './head'

const Repositories = () => {
  const { username } = useParams()
  const [repos, setRepos] = useState([])
  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}/repos`).then(({ data }) => {
      setRepos(data)
    })
  }, [username])

  return (
    <div>
      <Head title="Hello" />
      <div id="repository-name">2.This is ListRepositories of {username}</div>
      <div>
        {repos.map((item, index) => (
          <div className="no-underline hover:underline text-blue-500 text-lg">
            <Link to={`/home/profile/${username}/${item.name}`}>
              {index}.{item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

Repositories.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Repositories)
