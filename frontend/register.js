// import { useState } from "react";
// import { registerUser } from "../services/api";
// import { useRouter } from "next/router";

// export default function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleRegister = async () => {
//     try {
//       await registerUser({ email, password });
//       router.push("/login");
//     } catch (error) {
//       console.error("Registration Failed", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleRegister}>Register</button>
//     </div>
//   );
// }
import { useState } from "react";
import { registerUser } from "../services/api";
import { useRouter } from "next/router";

export default function Register() {
  const [name, setName] = useState("");  // 🔹 Added name field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await registerUser({ name, email, password });  // 🔹 Include name
      router.push("/login");
    } catch (error) {
      console.error("Registration Failed", error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />  {/* 🔹 Name input */}
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

