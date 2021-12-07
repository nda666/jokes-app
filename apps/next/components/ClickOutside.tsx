import { useEffect, useRef } from 'react';
export default function ClickOutside(props) {
  let ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      console.log('ClickOutside');
      props.onClickOutside && props.onClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return <div ref={ref}>{props.children}</div>;
}
