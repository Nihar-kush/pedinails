import React from "react";

export default function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    //FIREBASE
    // try {
    //   const res = await createUserWithEmailAndPassword(auth, email, password);

    //   const storageRef = ref(storage, displayName);
    //   const uploadTask = uploadBytesResumable(storageRef, file);

    //   uploadTask.on(
    //     (error) => {
    //       setError(true);
    //     },
    //     () => {
    //       getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
    //         //Update profile
    //         await updateProfile(res.user, {
    //           displayName,
    //           photoURL: downloadURL,
    //         });
    //         //
    //         let query = [];
    //         let currentQuery = "";
    //         for (let index = 0; index < displayName.length; index++) {
    //           const element = displayName[index];
    //           currentQuery += element;
    //           query.push(currentQuery.toLowerCase());
    //         }
    //         //create user on firestore
    //         await setDoc(doc(db, "users", res.user.uid), {
    //           uid: res.user.uid,
    //           displayName,
    //           email,
    //           photoURL: downloadURL,
    //           query,
    //         });

    //         //create empty user chats on firestore
    //         await setDoc(doc(db, "userChats", res.user.uid), {});
    //         navigate("/");
    //       });
    //     }
    //   );
    // } catch (err) {
    //   setError(true);
    // }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chatmore</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <AddPhotoAlternate className="icon" />
            Add an avatar
          </label>
          <button>Sign up</button>
        </form>
        {error && <span className="alert">Something went wrong!</span>}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
