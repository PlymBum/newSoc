import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import store from "./redux/redux-store"
import HeaderContainer from "./components/Header/HeaderContainer";

window.store=store

function App(props) {

    return (
                    <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar />

                <div className='app-wrapper-content'>
                    <Route path='/profile/:id?' render={() => <ProfileContainer  />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>


                </div>

            </div>

    );
}

export default App;
