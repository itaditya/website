export type Level = 1 | 2 | 3;

export type MDXHeadingProps = {
  level: Level;
  className?: string;
  showAnchorLink?: boolean;
  children: string;
};

export type HeadingTag = `h${Level}`;
