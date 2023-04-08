// import Footer from '@footer';
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import { BrowserRouter } from 'react-router-dom';
import DataTable from './components/table/DataTable';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <main>
                    <Sidebar />
                </main>
                {/* <Footer /> */}
                <DataTable />
            </div>
        </BrowserRouter>
    );
}

export default App;
