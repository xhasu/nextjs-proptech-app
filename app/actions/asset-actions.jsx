const actions = () => {
  const add = () => {
    return {
      type: 'add',
    };
  };

  const remove = (id) => {
    return {
      type: 'remove',
      payload: id,
    };
  };

  const reset = (data) => {
    return {
      type: 'reset',
      payload: data,
    };
  };

  return {
    add: add,
    remove: remove,
    reset: reset,
  };
};

export default actions;