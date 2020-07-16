import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from './head'
import Repositories from './list-repositories'
import Profile from './profile'
import Dashboard from './dashboard'

const Home = () => {
  return (
    <div>
      <Head title="Hello" />
      <div>
        <div className="flex items-start justify-center h-screen">
          <div className="bg-indigo-800  text-white font-bold rounded-lg border shadow-lg p-10">
            <Switch>
              <Route exact path="/" component={() => <Dashboard />} />
              <Route exact path="/:username" component={() => <Repositories />} />
              <Route exact path="/:username/:reponame" component={() => <Profile />} />
            </Switch>
            <div>
              <Link to="/"> Go To First Page</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
