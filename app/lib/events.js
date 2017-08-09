import raf from 'raf';

export const optimizedEvent = (event) => {
  const callbacks = [];
  let running = false;

  const runCallbacks = () => {
    callbacks.map(c => c());
    running = false;
  };

  const addCallback = c => callbacks.push(c);

  const action = () => {
    if (!running) {
      running = true;
      raf(runCallbacks);
    }
  };

  return {
    add(c) {
      if (!callbacks.length) {
        window.addEventListener(event, action);
      }

      return addCallback(c);
    },

    remove() {
      window.removeEventListener(event, action);
    },
  };
};
