export default function MDXImage(props) {
  return (
    <a href={props.src} target="_blank">
      <figure>
        <img className="mx-auto mt-10 rounded-md" src={props.src} />
        <figcaption className="block mt-4 mb-8 text-base text-center text-gray-700">{props.alt}</figcaption>
      </figure>
    </a>
  );
}
