let score: number | string = 33; // union type
score = 44;
score = "55";

type user = {
  name: string;
  id: number;
};

type admin = {
  username: string;
  id: number;
};

let raj: user | admin = { name: "raj", id: 334 };
raj = { username: "hc", id: 334 };

const data: number[] = [1, 2, 3]; //only numbers
const data2: string[] = ["1", "2", "3"]; //only strings
const data3: string[] | number[] = ["1", "2", "3"]; //either all strings or all numbers
const data4: (string | number)[] = ["1", "2", 3]; // combination of strings and numbers

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment = "crew" (error)
