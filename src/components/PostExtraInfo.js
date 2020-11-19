import cn from '_utils/classnames';
import { getShortDate } from '_utils/dateConvert';

export function PublishAndReadTime(props) {
  const { post, className, ...restProps } = props;
  return (
    <div className={cn({ 'text-gray-600 text-sm flex mt-1': true, [className]: true })} {...restProps}>
      {
        post.date && (
          <div>
            Published on <span>{getShortDate(post.date)}</span>
          </div>
        )
      }
      {
        post.readingTime && (
          <div className="ml-4">
            <span>{post.readingTime}</span> read
          </div>
        )
      }
    </div>
  );
}
