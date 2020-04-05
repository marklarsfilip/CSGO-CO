export default function generateId(type) {
  let id;
  const timestamp = new Date().getTime();
  switch (type) {
    case 'case':
      id = '1.' + timestamp.toString();
      break;
    case 'item':
      id = '2.' + timestamp.toString();
      break;
    default:
      id = 'unknown';
  }
  return id;
}
