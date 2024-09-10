function calculateTax(income, expenses) {
  if (
    income > 0 &&
    expenses > 0 &&
    income >= expenses &&
    typeof income === "number" &&
    typeof expenses === "number"
  ) {
    return (income - expenses) * 0.2;
  } else {
    return "Invalid Input";
  }
}


