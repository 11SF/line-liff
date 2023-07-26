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
        liffId: "2000214509-NzW3XVOX",
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

  return (
    <div>
      {user !== null ? (
        <>
          <img
            className="w-1/6 rounded-full object-cover mx-auto"
            alt="img"
            src={user?.pictureUrl}
          ></img>
          <h1>Hello {user.displayName}</h1>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
