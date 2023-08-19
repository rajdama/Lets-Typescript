type Usertype = {
  name: string;
  email: string;
  isActive: boolean;
};
function createUser(user: Usertype): Usertype {
  return { name: "", email: "", isActive: true };
}

type User = {
  readonly _id: string; //readonly
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number; // optional
};

let myUser: User = {
  _id: "1245",
  name: "h",
  email: "h@h.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};
type cardDate = {
  cardDate: string;
};
type cardDetails = cardNumber & cardDate; // combining types //
