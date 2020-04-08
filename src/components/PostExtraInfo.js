import cn from '_utils/classnames';
import { getShortDate } from '_utils/dateConvert';

export function PublishAndReadTime(props) {
  const { post, className, ...restProps } = props;
  return (
    <div className={cn({ 'text-gray-700 text-sm flex mt-1': true, [className]: true })} {...restProps}>
      <div>
        Published on <span>{getShortDate(post.date)}</span>
      </div>
      <div className="ml-4">
        <span>{post.readingTime}</span> read
      </div>
    </div>
  );
}
