// ============================================================
// ASSIGNMENT 1 - DATA TYPES IN TYPESCRIPT
// ============================================================
// TypeScript has strong typing - every variable must have a type.
// Common types: number, string, boolean, char (string with 1 char)
// ============================================================

// 1. Temperature - uses 'number' because it has decimal point
const temperatureInCelsius: number = 25.5;
console.log("1. Temperature:", temperatureInCelsius);

// 2. Whether customer placed an order - uses 'boolean' (true/false only)
const hasPlacedOrder: boolean = true;
console.log("2. Has Placed Order:", hasPlacedOrder);

// 3. Phone number - uses 'string' because it has dashes and is not used in math
const phoneNumber: string = "123-456-7890";
console.log("3. Phone Number:", phoneNumber);

// 4. Bank account amount - uses 'number' because it has decimal and used in calculations
const bankAccountBalance: number = 1000.50;
console.log("4. Bank Account Balance:", bankAccountBalance);

// 5. Email address - uses 'string' because it is text
const emailAddress: string = "john.doe@example.com";
console.log("5. Email Address:", emailAddress);

// 6. Coordinates - uses 'number' for both latitude and longitude
const latitude: number = 37.7749;
const longitude: number = -122.4194;
console.log("6. Coordinates (lat, lng):", latitude, longitude);

// 7. Marital status - uses 'boolean' (true = married, false = not married)
const isMarried: boolean = true;
console.log("7. Is Married:", isMarried);

// 8. Occupation - uses 'string' because it is a text description
const occupation: string = "Software Engineer";
console.log("8. Occupation:", occupation);

// 9. Favourite colour - uses 'string' because it is text
const favouriteColour: string = "Blue";
console.log("9. Favourite Colour:", favouriteColour);

// 10. Current year - uses 'number' because it is a whole number (integer)
const currentYear: number = 2023;
console.log("10. Current Year:", currentYear);

// 11. Social media followers - uses 'number' (large integer)
const numberOfFollowers: number = 1000000;
console.log("11. Number of Followers:", numberOfFollowers);

// 12. Movie rating - uses 'number' because it has decimals
const movieRating: number = 7.5;
console.log("12. Movie Rating:", movieRating);

// 13. Blood type - uses 'string' (TypeScript has no 'char' type, so single character = string)
const bloodType: string = "A";
console.log("13. Blood Type:", bloodType);

// 14. Book title - uses 'string' because it is text
const bookTitle: string = "To Kill a Mockingbird";
console.log("14. Book Title:", bookTitle);

// 15. Number of employees - uses 'number' (whole number / integer)
const numberOfEmployees: number = 500;
console.log("15. Number of Employees:", numberOfEmployees);

// 16. Time of event - uses 'string' because "2:30 PM" is text, not a pure number
const eventTime: string = "2:30 PM";
console.log("16. Event Time:", eventTime);

// 17. Country name - uses 'string' because it is text
const countryName: string = "United States";
console.log("17. Country Name:", countryName);

// 18. Eye color - uses 'string' because it is text
const eyeColor: string = "Brown";
console.log("18. Eye Color:", eyeColor);

// 19. Birthplace - uses 'string' because it is a place name (text)
const birthPlace: string = "New York City";
console.log("19. Birthplace:", birthPlace);

// 20. Distance between cities - uses 'number' because it has decimal point
const distanceBetweenCities: number = 200.5;
console.log("20. Distance Between Cities:", distanceBetweenCities);
