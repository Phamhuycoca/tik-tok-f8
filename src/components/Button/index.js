import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    className,
    onClick,
    chilren,
    text = false,
    primary = false,
    small = false,
    large = false,
    outline = false,
    rounded = false,
    disabled = false,
    lefticon,
    rightticon,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        // delete props.onClick;
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', { primary, outline, small, large, text, disabled, rounded, [className]: className });
    return (
        <Comp className={classes} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('title')}>{chilren}</span>
            {rightticon && <span className={cx('icon')}>{rightticon}</span>}
        </Comp>
    );
}

export default Button;
