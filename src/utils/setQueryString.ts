export const setQueryString = (url: string, args: object) => {
  const params = Object.entries(args)
    .filter(([_key, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
    .join('&');
  return `${url}?${params}`;
};
