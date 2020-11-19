import IconLink from '_components/icons/IconLink';

function convertToSlug(Text = '') {
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
  const { level = 3, className = '', children, showAnchorLink = true, ...restProps } = props;

  const fullClassName = `group flex items-baseline text-gray-800 font-bold font-heading ${className}`;
  const fullAnchorClassName = `inline -ml-8 mr-2 text-xl text-gray-800 opacity-0 group-hover:opacity-100 focus:opacity-100 transition ${anchorTextLevelMapping[level]}`;
  const slug = convertToSlug(children);
  const Element = 'h' + level;

  return (
    <Element id={slug} className={fullClassName} {...restProps}>
      {showAnchorLink && (
        <a href={`#${slug}`} className={fullAnchorClassName}>
          <span className="sr-only">Link to this heading</span>
          <IconLink />
        </a>
      )}
      <span>{children}</span>
    </Element>
  );
}
