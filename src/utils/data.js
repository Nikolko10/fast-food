const getData = () => {
  const locaBurgers = localStorage.getItem('burgers');

  if (locaBurgers) {
    const data = JSON.parse(locaBurgers);
    
    return data;
  }

  return null;
};

const removeData = () => {
  const locaBurgers = localStorage.getItem('burgers');

  if (locaBurgers) {
    localStorage.removeItem('burgers');
  }

  return null;
};

const setData = (value) => {
  localStorage.setItem('burgers', value);
};

export {
  getData,
  setData,
  removeData,
};
