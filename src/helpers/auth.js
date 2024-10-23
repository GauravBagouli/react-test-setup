import { setAuthorization } from './api';
import { jwtDecode } from 'jwt-decode';
import { Base64 } from 'js-base64';

export function storeAccessToken(token) {
  localStorage.setItem('accessToken', token);
  setAuthorization();
  return true;
}

export function logout() {
  localStorage.clear();
  removeAllCookies();
  setAuthorization();
  setTimeout(() => {
    if (process.browser) window.location.href = `${window.location.origin}/`;
  }, 500);
  return true;
}
export const encodeData = (payload) => {
  try {
    let dataString = Base64.btoa(encodeURI(JSON.stringify(payload)));
    return dataString;
  } catch (error) {
    return error;
  }
};

export const decodeData = (token) => {
  try {
    if (!token) {
      return '';
    }
    let payload = JSON.parse(decodeURI(Base64.atob(token)));
    return payload;
  } catch (error) {
    return error;
  }
};

export function decryptedToken(token) {
  try {
    return jwtDecode(token);
  } catch (err) {
    return false;
  }
}

export function isAuth() {
  try {
    const tokenChecked = localStorage.getItem('accessToken');
    if (tokenChecked) {
      return decryptedToken(tokenChecked);
    }
    return false;
  } catch (err) {
    return false;
  }
}

export function currentUser() {
  try {
    if (process.browser) {
      return localStorage.getItem('accessToken');
    }
    return false;
  } catch (error) {
    return false;
  }
}

export function setUserProfile(userData) {
  localStorage.setItem('currentUser', JSON.stringify(userData));
}

export function getUserProfile() {
  try {
    if (process.browser) {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser) {
        return decodeData(currentUser);
      } else {
        return logout();
      }
    }
    return false;
  } catch (error) {
    return error;
  }
}

export function setCurrentUserType(adminTab) {
  if (process.browser) {
    localStorage.setItem('adminTab', adminTab);
  }
}

export function setCurrentThemeType(themeType) {
  if (process.browser) {
    localStorage.setItem('themeType', themeType);
  }
}

export function checkIsAdmin() {
  try {
    const tabChecked = localStorage.getItem('adminTab');
    if (tabChecked === 'true') {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
}

export function checkIsDark() {
  try {
    const themeChecked = localStorage.getItem('themeType');
    if (themeChecked === 'true') {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
}

/** For getting all localstorage items */
export function allLocalStorageItem() {
  try {
    let values = [],
      keys = Object.keys(localStorage);
    keys.forEach((item) => values.push(localStorage.getItem(item)));
    return JSON.parse(values);
  } catch (error) {
    return false;
  }
}

// for getting cookie by name
export function getCookie(name) {
  const cookies = document?.cookie.split(';').map((cookie) => cookie.trim());
  for (const cookie of cookies) {
    const [cookieName, value] = cookie.split('=');
    if (cookieName === name) {
      return value;
    }
  }
  return undefined;
}

// for removing all cookies
export function removeAllCookies() {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
  }
}
