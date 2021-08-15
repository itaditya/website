import CodeDescription from '_components/CodeDescription';
import cn from '_utils/classnames';

export function EmbedCSB(props) {
  const { id, title, description, className = '' } = props;
  return (
    <div>
      <div className={cn({ 'mt-10 mb-4 lg:-mx-24 shadow-lg h-[600px]': true, [className]: true })}>
        <iframe
          className="w-full h-full"
          src={`https://codesandbox.io/embed/${id}?codemirror=1&fontsize=14&hidenavigation=1&theme=dark&hidedevtools=1&moduleview=0`}
          loading="lazy"
          title={title}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
      <CodeDescription children={description} />
    </div>
  );
}
