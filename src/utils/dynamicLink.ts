export const dynamicLink = (url: string) => {
  window.location.href = `https://drawyourcard.page.link?link=${window.location.origin}${url}&apn=org.nexters.draw&amv=1&isi=6458440134&ibi=com.nexters.drawyourcard`;
};
