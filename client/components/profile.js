import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import Head from './head'

const Profile = () => {
  const params = useParams()
  const [repo, setRepo] = useState('')
  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${params.username}/${params.reponame}/readme`)
      .then(({ data }) => {
        setRepo(data)
      })
  }, [params])

  const [readme, setReadme] = useState('')
  useEffect(() => {
    axios.get(`${repo.download_url}`).then(({ data }) => {
      setReadme(data)
    })
  }, [repo])
  return (
    <div>
      <Head title="Hello" />
      3. This is Readme file of {params.reponame}
      <div>Link:</div>
      <div>{repo.download_url}</div>
      <div>Text:</div>
      <div id="description" className="bg-grey-500 font-sans text-lg text-white-800 text-center">
        {readme}
      </div>
    </div>
  )
}

Profile.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
