function createCourse(): { name: string; price: number } {
  //return type as object
  return { name: "reactjs", price: 400 };
}

function signin({ name: string, password: boolean }): {} {
  //argument as object
  return { name: "reactjs", password: "400" };
}
