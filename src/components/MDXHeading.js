import IconLink from '_components/IconLink';

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

const anchorTextLevelMapping = {
  '1': 'text-2xl -ml-10',
  '2': 'text-xl',
  '3': 'text-md',
};

export default function MDXHeading(props) {
  const { level = 3, className = '', children, ...restProps } = props;

  const fullClassName = `group flex items-baseline text-gray-800 font-bold font-heading ${className}`;
  const fullAnchorClassName = `inline -ml-8 mr-2 text-xl text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in ${anchorTextLevelMapping[level]}`;
  const slug = convertToSlug(children);
  const Element = 'h' + level;

  return (
    <Element id={slug} className={fullClassName} {...restProps}>
      <a href={`#${slug}`} className={fullAnchorClassName}>
        <IconLink />
      </a>
      <span>{children}</span>
    </Element>
  );
}
