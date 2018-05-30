import langs from './configs/lang';
const LANG_KEY = 'MUSE_LANGUAGE';
let userLanguage = localStorage.getItem(LANG_KEY) || window.navigator.language || 'en-US';

userLanguage = langs.filter(item => item.lang === userLanguage).length > 0 ? userLanguage : 'zh-CN';

export function changeLocale (lang) {
  localStorage.setItem(LANG_KEY, lang);
}

export default userLanguage;
