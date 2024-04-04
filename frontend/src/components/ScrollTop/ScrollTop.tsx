import React, { useReducer } from 'react';
import { FaArrowUp } from "react-icons/fa";

type State = {
  isVisible: boolean;
};

type Action = { type: 'SHOW' } | { type: 'HIDE' };

const initialState: State = {
  isVisible: false
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SHOW':
      return { ...state, isVisible: true };
    case 'HIDE':
      return { ...state, isVisible: false };
    default:
      return state;
  }
};

const ScrollTop: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      dispatch({ type: 'SHOW' });
    } else {
      dispatch({ type: 'HIDE' });
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {state.isVisible && (
        <button
          className="fixed bottom-4 right text-black px-4 py-2 rounded-lg"
          onClick={scrollToTop}
        >
          <FaArrowUp size={60} />
        </button>
      )}
    </>
  );
};

export default ScrollTop;
