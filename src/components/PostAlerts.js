import cn from '_utils/classnames';

export function AlertWarning(props) {
  const { children, className = '', ...restProps } = props;
  const fullClassName = cn({ 'text-center flex justify-center': true, [className]: true });
  return (
    <div role="alert" {...restProps} className={fullClassName}>
      <span className="px-4 py-1 text-yellow-900 bg-yellow-100 border-2 border-orange-400 rounded-lg">{children}</span>
    </div>
  );
}

export function AlertOriginalPublish(props) {
  const { publisherName, href, className = '', ...restProps } = props;
  const fullClassName = cn({ 'text-gray-700 text-lg text-center md:flex justify-center space-x-1 mt-8': true, [className]: true });
  return (
    <div role="alert" {...restProps} className={fullClassName}>
      <span>This post was originally published at </span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-700 visited:text-indigo-800"
      >
        {publisherName}
      </a>
    </div>
  );
}
