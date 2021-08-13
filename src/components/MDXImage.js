export default function MDXImage(props) {
  const { src, alt, aspectRatio = 1.5 } = props;

  const height = 300;
  const width = aspectRatio * height;

  return (
    <a href={src} target="_blank" rel="noopener noreferrer">
      <img className="w-full mx-auto mt-10 rounded-md text-transparent" src={src} width={width} height={height} alt={alt} />
      <span className="block mt-4 mb-8 text-base text-center text-gray-700" aria-hidden={true}>
        {alt}
      </span>
    </a>
  );
}
