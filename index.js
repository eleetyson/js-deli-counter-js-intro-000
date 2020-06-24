function takeANumber(line, newName) {
  line.push(newName);
  console.log(line[newName]);
  return (`Welcome, ${newName}. You are number ${line[newName]} in line.`);
}
