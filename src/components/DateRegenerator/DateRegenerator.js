export const MonthToMonthName = (month) => {
  const monthNames = [
    'Ocak',
    'Şubet',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ];

  return monthNames[month + 1];
};
