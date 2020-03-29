export default function MDXImage(props) {
  return (
    <figure>
      <img className="rounded-md mt-10 mx-auto" src={props.src} />
      <figcaption className="block text-base text-center text-gray-700 mb-8 mt-4">{props.alt}</figcaption>
    </figure>
  );
}
