import Header from '../components/Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <div className="container">
                <Header />
            </div>
            <div className="content">{children}</div>
        </div>
    );
}

export default DefaultLayout;
