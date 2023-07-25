import { Profile } from "@liff/get-profile";
import liff from "@line/liff";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState<Profile | null>(null);

  useEffect(() => {
    liff.getProfile().then((r) => {
      setUser(r);
    });
  }, []);

  return <div>{user !== null ? <h1>Hello {user.displayName}</h1> : ""}</div>;
}

export default App;
