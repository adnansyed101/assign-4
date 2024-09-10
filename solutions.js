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

function sendNotification(email) {
  if (email.includes("@")) {
    const name = email.split("@")[0];
    const domain = email.split("@")[1];
    return `${name} sent you an email from ${domain}`;
  } else {
    return "Invalid Input";
  }
}

function checkDigitsInName(name) {
  if (typeof name === "string") {
    return /\d/.test(name);
  } else {
    return "Invalid Input";
  }
}

function calculateFinalScore(obj) {
  if (typeof obj === "object") {
    const farmerPoints = obj.isFFamily ? 20 : 0;
    const totalPoints = obj.testScore + obj.schoolGrade + farmerPoints;

    return totalPoints >= 80;
  } else {
    return "Invalid Input";
  }
}

function waitingTime(waitingTimes, serialNumber) {
  if (Array.isArray(waitingTimes) && typeof serialNumber === "number") {
    let totalWaitingTime = 0;
    for (const num of waitingTimes) {
      totalWaitingTime += num;
    }
    const averageWaitingTime = Math.round(
      totalWaitingTime / waitingTimes.length
    );

    const peopleBefore = serialNumber - 1 - waitingTimes.length;

    return averageWaitingTime * peopleBefore;
  } else {
    return "Invalid Input";
  }
}
