export const isValidPassword = (inputString) => {
  // Counters for different character types
  let capitalCount = 0;
  let smallCount = 0;
  let numberCount = 0;
  let specialCount = 0;

  // Regular expressions for character types
  const capitalRegex = /[A-Z]/;
  const smallRegex = /[a-z]/;
  const numberRegex = /\d/;
  const specialRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

  // Iterate through each character in the input string
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (capitalRegex.test(char)) {
      capitalCount++;
    } else if (smallRegex.test(char)) {
      smallCount++;
    } else if (numberRegex.test(char)) {
      numberCount++;
    } else if (specialRegex.test(char)) {
      specialCount++;
    }
  }

  // Check if all criteria are met
  return capitalCount >= 2 && smallCount >= 2 && numberCount >= 2 && specialCount >= 2;
};
export const isValidEmail = (email) => {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidFirstName = (str) => {
  if (str.length >= 2 && str.length <= 50) {
    return true;
  }
};
export const isValidAddress = (address) => {
  if (address.length >= 10) {
    return true;
  }
};
export const isValidPhoneNumber = (phoneNumber) => {
  // Remove any non-digit characters
  const cleanedNumber = phoneNumber.replace(/\D/g, "");

  // Check if the cleaned number has exactly 10 digits
  return cleanedNumber.length === 10;
};
