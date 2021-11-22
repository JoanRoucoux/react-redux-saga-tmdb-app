const setWindowLocationHref = (href) => {
  window.location.href = href;
};

const setWindowLocationReplace = (href) => {
  window.location.replace(href);
};

const WindowNavigationFunctions = {
  setWindowLocationHref,
  setWindowLocationReplace,
};

export default WindowNavigationFunctions;
