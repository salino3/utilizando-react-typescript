import { useState } from "react";

interface User {
  uid: string; // uid = user identifacation
  name: string;
}

  const templateUser: User = { // añadiendo texto por defecto
    uid: "xxx123", 
    name: "Juan",
  };

const Usuario = () => {
  const [user, setUser] = useState<User>(templateUser);
      //  {
    //   uid: '', // valores predeterminados del interface, solo 'String'
    //   name: '' }


  const login = () => {
    setUser({
      uid: "ABC123",
      name: "Carlos Torre",
    });
  };
  return (
    <div className="mt-5">
      <h3>Usuario</h3>
      <button 
      onClick={login} 
      type="submit" 
      className="btn btn-outline-primary">
        Login
      </button>

      {
          (!user) ? <pre>No hay usuario</pre>
          : <pre>{JSON.stringify(user)}</pre>

      }

    </div>
  );
};

export default Usuario;
