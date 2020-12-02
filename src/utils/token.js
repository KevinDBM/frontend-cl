import universalCookiesImp from 'universal-cookie';
import jwtDecode from 'jwt-decode';

const nameToken = 'userToken';
const universalCookie = new universalCookiesImp();

const saveToken = token => {
  let info_token = jwtDecode(token),
    expires = new Date(1970, 0, 1);

  expires.setTime(info_token.exp * 1000);
  
  universalCookie.set(nameToken, token, {
    expires,
  });
};
const deleteToken = () => {
  universalCookie.remove(nameToken)
}

const getToken = () => {
  return universalCookie.get(nameToken);
};

const getInfoToken = (token = false) => {
  let current_token = token || getToken();
  if(current_token){
    return jwtDecode(current_token)
  }
  
  return false;
}

const listenerCookies = (callback) => {
  return universalCookie.addChangeListener(callback)
}

export { saveToken, getToken,getInfoToken,deleteToken,listenerCookies };