const APPLE_LOGIN_CLIENT_ID = 'kr.kro.draw-nexters';
const APPLE_LOGIN_REDIRECT_URL = `${import.meta.env.VITE_DOMAIN}/callback/apple`;
const config = {
  client_id: APPLE_LOGIN_CLIENT_ID, // This is the service ID we created.
  redirect_uri: APPLE_LOGIN_REDIRECT_URL, // As registered along with our service ID
  response_type: 'code id_token',
  scope: 'name', // To tell apple we want the user name and emails fields in the response it sends us.
  response_mode: 'form_post',
  usePopup: true,
  // m: 11,
  // v: '1.5.4',
  //nonce: import.meta.env.VITE_APPLE_NONCE,
};
const queryString = Object.entries(config)
  .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
  .join('&');
export const APPLE_AUTH_URL = `https://appleid.apple.com/auth/authorize?${queryString}`;
