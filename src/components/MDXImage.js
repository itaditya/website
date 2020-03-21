import { Fragment } from 'react';

export default function MDXImage(props) {
  return (
    <Fragment>
      <img className="rounded-md mt-10 mx-auto" src={props.src} />
      <span className="block text-base text-center text-gray-700 mb-8 mt-4">{props.alt}</span>
    </Fragment>
  );
}
