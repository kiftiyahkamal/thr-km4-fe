function addMoreData(object, key, value) {
  return Object.assign(object, {[key]: value});
}

  let people = {name: 'Edo', age: 20};
  let newPeople = addMoreData(people, 'address', 'Jakarta');
  console.log(newPeople);

  let hobbies = ['coding', 'reading'];
  let newHobbies = addMoreData(people, 'hobbies', hobbies);
  console.log(newHobbies);

  let isMarried = false;
  let newStatus = addMoreData(people, 'isMarried', isMarried);
  console.log(newStatus);