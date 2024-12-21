import React from 'react';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(style);

function MenuItem({ data }) {
    return (
        <div>
            <Button className={cx('menu-item')} chilren={data.title} lefticon={data.icon} to={data.to} />
        </div>
    );
}

export default MenuItem;
