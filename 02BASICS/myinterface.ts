interface iuser {
  email: string;
  userId: number;
  // startTrail: () => string,
  startTrail(): string; // same as above
}

let rajd: iuser = {
  email: "r@r.com",
  userId: 2211,
  startTrail: () => {
    return "trial started";
  },
};
