const Table = ({array, deleteHandler}) => {
    return(
        <>
         <table style={{ margin: "10px auto", width: "70%", textAlign: "center" }}>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Delete button</th>
        </tr>

         {array.map(({id, name, age, email}) => {
          return (
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{email}</td>
              <td>
                {<button onClick={() => deleteHandler(id)}>delete</button> }
              </td>
            </tr>
          );
        })}
      </table>
        </>
    )
}
export default Table