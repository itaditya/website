import cn from 'classnames';

export function WarningAlert(props) {
  const { children, className, ...restProps } = props;
  const fullClassName = cn('text-center flex justify-center', className);
  return (
    <div role="alert" {...restProps} className={fullClassName}>
      <span className="text-yellow-800 bg-orange-200 px-4 py-1 rounded-lg border-2 border-orange-400">
        {children}
      </span>
    </div>
  )
}
