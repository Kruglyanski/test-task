import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import {AuthPage} from './components/AuthPage/AuthPage'
import {FloodPage} from './components/FloodPage/FloodPage'
import {ProfPage} from './components/ProfPage/ProfPage'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {RootState} from './redux/rootReducer'
import {CustomLayout} from './components/CustomLayout/CustomLayout'

function App() {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
    return (
        <div className="App">
            <BrowserRouter>
                {
                    !isAuthenticated
                        ?
                        <AuthPage/>
                        :
                        <>
                        <Switch>
                            <Route path="/flood" exact>
                                <CustomLayout>
                                    <FloodPage/>
                                </CustomLayout>
                            </Route>
                            <Route path="/prof" exact>
                                <CustomLayout>
                                    <ProfPage/>
                                </CustomLayout>
                            </Route>
                            <Redirect to="/prof"/>
                        </Switch>

                        </>
                }


            </BrowserRouter>

        </div>
    )
}

export default App
