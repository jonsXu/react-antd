import React from 'react';
import { HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Demo1 from './page/demo1'
import Main from './page/main/index'
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

                        </Main>
                    }>
                    </Route>
                </App>
            </HashRouter>
        )
    }
}
