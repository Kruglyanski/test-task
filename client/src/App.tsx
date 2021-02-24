import React from 'react'
import {useSelector} from 'react-redux'
import './App.css'
import 'antd/dist/antd.css'
import {AuthPage} from './components/AuthPage/AuthPage'
import {ChatPage} from './components/ChatPage/ChatPage'
// @ts-ignore
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import {RootState} from './redux/rootReducer'
import {CustomLayout} from './components/CustomLayout/CustomLayout'
import {InfoPage} from './components/InfoPage/InfoPage'

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
                                    <ChatPage isFlood={true}/>
                                </CustomLayout>
                            </Route>
                            <Route path="/prof" exact>
                                <CustomLayout>
                                    <ChatPage isFlood={false}/>
                                </CustomLayout>
                            </Route>
                            <Route path="/info" exact>
                                <CustomLayout>
                                    <InfoPage/>
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
