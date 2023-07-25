/* eslint-disable @typescript-eslint/no-explicit-any */
import { Profile } from "@liff/get-profile";
import liff from "@line/liff";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState<Profile | null>(null);

  useEffect(() => {
    liff
      .init({
        liffId: "2000214509-NzW3XVOX", // Use own liffId
      })
      .then(() => {
        if (liff.isLoggedIn()) {
          liff.getProfile().then((r) => {
            setUser(r);
            console.log(r);
          });
        } else {
          liff.login();
        }
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  // useEffect(() => {
  //   if (liff.isLoggedIn()) {
  //     liff.getProfile().then((r) => {
  //       setUser(r);
  //     });
  //   } else {
  //     liff.login();
  //   }
  // }, []);

  return <div>{user !== null ? <h1>Hello {user.displayName}</h1> : ""}</div>;
}

export default App;
