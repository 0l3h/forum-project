import Userbox from "./userbox";

async function Users() {
  const users = JSON.parse(await (await fetch('http://localhost:5000/users')).json());
  return (
    <>
      <h1 className='font-bold text-3xl mb-5'>Users</h1>
      <ul className='grid grid-cols-3 gap-10'>
        {
          users?.map(u => <Userbox user={u}/>)
        } 
      </ul>
    </>
  )
}

export default Users;