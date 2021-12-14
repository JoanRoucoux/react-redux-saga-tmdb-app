const saveThemeMode = (themeMode) => window.localStorage.setItem('themeMode', themeMode);
const retrieveThemeMode = () => window.localStorage.getItem('themeMode');

const LocalStorageUtils = {
  saveThemeMode,
  retrieveThemeMode,
};

export default LocalStorageUtils;
