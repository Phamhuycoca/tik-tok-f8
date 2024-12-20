import { HeaderOnly } from '~/components/Layout';
import Following from '~/page/Following';
import Home from '~/page/Home';
import Profile from '~/page/Profile';
import Search from '~/page/Search';
import Upload from '~/page/Upload';

const publicRouters = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
const privateRouters = [];
export { privateRouters, publicRouters };
