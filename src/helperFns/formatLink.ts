export default function formatLink(path:string) {
    if (path.includes('/delivery-services')) {
      return path;
    } else {
      return `/delivery-services${path}`;
    }
}
  