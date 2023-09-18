

function SelectUser() {
  const changeUser = (event) => {
    console.log(event.target.value);
  };

  return (
    <select name="user" id="user" onChange={changeUser}>
      <option value="1">Aнтон</option>
      <option value="2">Петя</option>
    </select>
  );
}

export default SelectUser;