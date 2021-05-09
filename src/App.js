import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {updatePostText} from "./redux/state";



function App(props) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friends={props.state.friendsList}/>

                <div className='app-wrapper-content'>
                    {/*  <Route path='/profile' component={Profile}/>*/}
                    {/* <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>*/}
                    <Route path='/profile' render={() => <Profile profile={props.state.profilePage}
                                                                  addPost={props.addPost}
                                                                  updatePostText={props.updatePostText}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogPage} sendMessage={props.sendMessage}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
