const LANG_KEY = 'MUSE_LANGUAGE';
const userLanguage = localStorage.getItem(LANG_KEY) || window.navigator.language || 'en-US';

export function changeLocale (lang) {
  localStorage.setItem(LANG_KEY, lang);
}

export default userLanguage;
