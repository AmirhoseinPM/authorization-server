// تولید code_verifier تصادفی
export const generateRandomString = (length) => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    let result = '';
    const crypto = window.crypto || window.msCrypto;
    const values = new Uint32Array(length);
    crypto.getRandomValues(values);
    
    for (let i = 0; i < length; i++) {
      result += charset[values[i] % charset.length];
    }
    return result;
  };
  
  // تولید code_challenge با Web Crypto API
  export const generateCodeChallenge = async (codeVerifier) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  };
  
  // نسخه fallback برای مرورگرهای قدیمی
  export const generateCodeChallengeSimple = (codeVerifier) => {
    // استفاده از hash ساده اگر Web Crypto API در دسترس نبود
    const buffer = new TextEncoder().encode(codeVerifier);
    const hashArray = Array.from(new Uint8Array(buffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    return btoa(hashHex)
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  };