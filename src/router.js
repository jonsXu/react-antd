import React from 'react';
import { HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Demo1 from './page/demo1'
import Main from './page/main/index'
import BlogList from './page/blog/index'
import BlogEdit from './page/blogEdit/index'
import Admin from './admin'


export default class IRouter extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Route exact path="/" render={()=>
                        <Demo1>

                        </Demo1>
                    }>
                    </Route>
                    <Route path="/admin" render={()=>
                        <Admin>

                        </Admin>
                    }> 
                    </Route>
                    <Route path="/main" render={()=>
                        <Main>
                            <Route exact path="/main/index" component={BlogList}>
                            </Route>
                            <Route exact path="/main/blog/list" component={BlogList}>
                            </Route>
                            <Route exact path="/main/blog/add" component={BlogEdit}>
                            </Route>
                        </Main>
                    }>
                    </Route>
                </App>
            </HashRouter>
        )
    }
}
