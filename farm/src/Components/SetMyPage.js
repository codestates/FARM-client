import axios from "axios";

export default async function SetMyPage(accessToken) {
  const objHeader = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  const objFarm = await axios.get(
    `http://localhost:80/users/farminfo`,
    objHeader
  );

  const objUser = await axios.get(`http://localhost:80/users/info`, objHeader);
  const objUserInfo = {
    ...objUser.data.data.userinfo,
    projectList: [...objFarm.data.data],
  };

  return objUserInfo;
}
