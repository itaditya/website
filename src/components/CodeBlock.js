import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/oceanicNext';

const RE = /{([\d,-]+)}/;

function calculateLinesToHighlight(meta) {
  if (!RE.test(meta)) {
    return {
      shouldHighlightLine: () => false,
    };
  } else {
    const lineNumbers = RE.exec(meta)[1]
      .split(',')
      .map((v) => v.split('-').map((v) => parseInt(v, 10)));

    const shouldHighlightLine = (index) => {
      const lineNumber = index + 1;
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
      );
      return inRange;
    };
    return { shouldHighlightLine, lineNumbers };
  }
}

function CodeBlock({ metastring, className = '', children }) {
  const { shouldHighlightLine, lineNumbers } = calculateLinesToHighlight(metastring);
  const language = className.replace(/language-/, '');

  let highlightIndex = 0;

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={theme}>
      {({ className = '', style, tokens, getLineProps, getTokenProps }) => {
        const fullClassName = `mb-2 pt-6 rounded-md match-braces overflow-auto highlight-diff ${className}`;
        return (
          <pre className={fullClassName} style={style}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });
              let newClassNames = `${lineProps.className} px-8 leading-relaxed`;
              if (shouldHighlightLine(i)) {
                newClassNames += ' bg-overlay-200 py-1';
                highlightIndex += 1;
              }
              lineProps.className = newClassNames;
              return (
                <div key={i} {...lineProps}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </pre>
        );
      }}
    </Highlight>
  );
}

export default CodeBlock;
