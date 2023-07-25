import { Profile } from "@liff/get-profile";
import liff from "@line/liff";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState<Profile>();

  useEffect(() => {
    liff.getProfile().then((r) => {
      setUser(r);
    });
  }, []);

  return (
    <div>
      <h1>Hello {user?.displayName}</h1>
    </div>
  );
}

export default App;
