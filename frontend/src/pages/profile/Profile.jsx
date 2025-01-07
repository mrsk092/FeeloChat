import { useRecoilState, useRecoilValue } from "recoil";
import userInfoAtom from "@/stores/userInfoAtom";
import { useState } from "react";
import ProfileAvatar from "@/components/ui/ProfileAvatar";
import Modal from "@/components/ui/Modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import updateProfile from "@/util/updateProfile";
import { useNavigate } from "react-router-dom";

function Profile() {
  const {toast} = useToast();
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const navigate = useNavigate();
  const handleSaveChanges = ()=>{
    updateProfile(toast,firstName,lastName).then((data)=>{
        if(data){
          console.log(data);
          setUserInfo({...data});
          setFirstName(data.firstName);
          setLastName(data.lastName);
         console.log(userInfo);
          
        }
    }).catch((e)=>{
      console.log(e);
    });
  }
    console.log("rendered from profole");
  return (
    <Modal>
      <div className="h-[100vh] flex items-center justify-center flex-col gap-7">
        <ProfileAvatar profileImage={profileImage} />
        <div className="flex items-center justify-center flex-col gap-4">
          <Input
            value={userInfo.email}
            disabled
            className="flex items-center justify-center text-center"
            type="email"
            style={{ fontSize: "17px" }}
          ></Input>
          <Input
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
            className="flex items-center justify-center text-center"
            type="text"
            placeholder="First name"
            style={{ fontSize: "17px" }}
          ></Input>

          <Input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
            className="flex items-center justify-center text-center"
            type="text"
            placeholder="Last name"
            style={{ fontSize: "17px" }}
          ></Input>

          <Button
            onClick={handleSaveChanges}

          className="w-40 mt-3">Save changes</Button>
        </div>
      </div>
    </Modal>
  );
}

export default Profile;
