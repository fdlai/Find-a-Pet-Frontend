export function isValidZipcode(str: string) {
  return /^[0-9]{5}$/.test(str);
}
