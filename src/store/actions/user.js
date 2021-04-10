export const LOG_IN = 'LOG_IN';
export const REGISTER = 'REGISTER';

export const login = (email, password) => {
  const loginInfo = {email, password};

  return async (dispatch) => {
    let formData = new FormData();

    formData.append('email', loginInfo.email);
    formData.append('password', loginInfo.password);

    console.log(formData);

    try {
      const response = await fetch(
        `https://welive-app.com:443/api/v1/entrance/login`,
        {
          method: 'PUT',
          body: formData,
        },
      );
      const resData = await response.text();

      if (!response.ok) {
        throw new Error(resData);
      }

      dispatch({type: LOG_IN, user: {isLoggedIn: true}});
    } catch (err) {
      throw err;
    }
  };
};

export const register = (email, password, fullName, username) => {
  return async (dispatch) => {
    let formData = new FormData();

    formData.append('email', email);
    formData.append('password', password);
    formData.append('fullName', fullName);
    formData.append('username', username);

    console.log(formData);

    try {
      const response = await fetch(
        `https://welive-app.com:443/api/v1/entrance/signup`,
        {
          method: 'POST',
          body: formData,
        },
      );
      const resData = await response.text();

      if (!response.ok) {
        throw new Error(resData);
      }

      dispatch({type: REGISTER, user: {isLoggedIn: true}});
    } catch (err) {
      throw err;
    }
  };
};

// export const register = (registerInfo) => {
//   const registerInfoCorrected = {
//     name: registerInfo.name + ' ' + registerInfo.surname,
//     email: registerInfo.email,
//     password: registerInfo.password,
//   };

//   return async (dispatch) => {
//     try {
//       const response = await fetch(
//         `http://${ipAddress}:5000/api/users/signup`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(registerInfoCorrected),
//         },
//       );

//       const resData = await response.json();

//       if (!response.ok) {
//         throw new Error(resData.message);
//       }
//       if (!resData.user) {
//         throw new Error('Bir hata oluştu!');
//       }
//       console.log(resData);
//       dispatch({type: REGISTER, user: {isLoggedIn: true, info: resData.user}});
//     } catch (err) {
//       throw err;
//     }
//   };
// };
