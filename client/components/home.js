import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from './head'
import Header from './header'
import Repositories from './list-repositories'
import Profile from './profile'
import Dashboard from './dashboard'

const Home = () => {
  return (
    <div>
      <Head title="Hello" />
      <div>
        <Header username />
        <div className="flex items-center justify-center h-screen">
          <div className="bg-indigo-800  text-white font-bold rounded-lg border shadow-lg p-10">
            <Switch>
              <Route exact path="/home/dashboard/" component={() => <Dashboard />} />
              <Route exact path="/home/repositories/:username" component={() => <Repositories />} />
              <Route exact path="/home/profile/:username/:reponame" component={() => <Profile />} />
            </Switch>
            <div>
              <Link to="/"> Go To Home </Link>
            </div>
            <div>
              <Link to="/"> Go To Root </Link>
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
