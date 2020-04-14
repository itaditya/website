import cn from '_utils/classnames';

export function WarningAlert(props) {
  const { children, className, ...restProps } = props;
  const fullClassName = cn({ 'text-center flex justify-center': true, [className]: true });
  return (
    <div role="alert" {...restProps} className={fullClassName}>
      <span className="px-4 py-1 text-yellow-800 bg-orange-200 border-2 border-orange-400 rounded-lg">{children}</span>
    </div>
  );
}
