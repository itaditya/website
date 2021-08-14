// @ts-check

/**
 * @typedef { import('./types/PostExtraInfo').PublishDateProps } PublishDateProps
 * @typedef { import('./types/PostExtraInfo').PublishAndReadTimeProps } PublishAndReadTimeProps
 */

import cn from '_utils/classnames';
import { getShortDate } from '_utils/dateConvert';

/** @param { PublishDateProps } props */
export function PublishDate(props) {
  const { post, className = '', children, ...restProps } = props;
  return (
    <div className={cn({ 'text-gray-600 text-sm flex': true, [className]: true })} {...restProps}>
      <div>
        Published on <span>{getShortDate(post.date)}</span>
      </div>
      {children}
    </div>
  );
}

/** @param { PublishAndReadTimeProps } props */
export function PublishAndReadTime(props) {
  const { post } = props;

  return (
    <PublishDate {...props}>
      <div className="ml-4">
        <span>{post.readingTime}</span> read
      </div>
    </PublishDate>
  );
}
