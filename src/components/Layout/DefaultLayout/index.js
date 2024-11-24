import Header from '../components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <div className="container">
                <Header />
            </div>
            <Sidebar />
            <div className="content">{children}</div>
        </div>
    );
}

export default DefaultLayout;
