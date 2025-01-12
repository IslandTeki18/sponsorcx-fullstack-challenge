export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString();
};

export const formatCurrency = (value: number) => {
  return `$${value.toLocaleString()}`;
};