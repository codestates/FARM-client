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
  console.log("으아아아아", objUser.data.data.data.userinfo);
  const objUserInfo = {
    ...objUser.data.data.data.userinfo,
    projectList: [...objFarm.data.data],
  };
  console.log(`이건 뭔데?`, objUserInfo);
  return objUserInfo;
}
