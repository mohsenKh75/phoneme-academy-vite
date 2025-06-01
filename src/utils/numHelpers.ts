export function toFarsiNum(num: number | string) {
  const persianDigits: Array<string> = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, (d) => persianDigits[parseInt(d)]);
}

export function normalizeNum(persianDate: string): string {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  const englishDigits = '0123456789';

  return persianDate.replace(/[۰-۹]/g, (char) => englishDigits[persianDigits.indexOf(char)] ?? char);
}
