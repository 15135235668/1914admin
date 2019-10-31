import React from 'react'
import { HashRouter,Link,Navlink,Switch,Route,withRouter,Redirect} from 'react-router-dom'
import Admin from './pages/admin/admin'
import Login from './pages/login/login'
import Home from './pages/home/home'
import User from './pages/user/user'
class RootRoute extends React.Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' component={()=>{
                        return(
                            <Admin>
                                <Route path='/admin/home' component={Home}></Route>
                                <Route path='/admin/user' component={User}></Route>
                            </Admin>
                        )
                    }}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default RootRoute