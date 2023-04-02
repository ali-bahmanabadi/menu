import Footer from '@footer';
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <main>
                    <Sidebar />
                </main>
                {/* <Footer /> */}
            </div>
        </BrowserRouter>
    );
}

export default App;
