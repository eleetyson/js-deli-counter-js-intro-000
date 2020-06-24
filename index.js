function takeANumber(line, newName) {
  line.push(newName);
  return (`Welcome, ${newName}. You are number ${line[newName]} in line.`)
}
