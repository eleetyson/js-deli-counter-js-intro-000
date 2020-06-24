function takeANumber(line, newName) {
  line.push(newName);
  return (`Welcome, ${newName}. You are number ${line.length} in line.`);
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let first = line.shift();
    return (`Currently serving ${first}.`);
  }
}
