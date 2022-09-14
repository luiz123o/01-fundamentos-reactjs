interface FormattedDateType {
  date: Date;
  options: Intl.DateTimeFormatOptions;
}

export function formattedDate({ date, options }: FormattedDateType) {
  return new Intl.DateTimeFormat("pt-br", options).format(date);
}
