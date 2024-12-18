import Header from '../components/Header';
import Sidebar from './Sidebar';
import style from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
function DefaultLayout({ children }) {
    const cx = classNames.bind(style);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
