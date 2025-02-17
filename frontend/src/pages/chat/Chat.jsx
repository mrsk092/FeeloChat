import userInfoAtom from "@/stores/userInfoAtom";
import { useEffect } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import ContactContainer from "./components/ContactContainer";
import EmptyChatContainer from "./components/EmptyChatContainer";
import ChatContainer from "./components/ChatContainer";
import  { selectedChatTypeAtom } from "@/stores/chatAtom";

function Chat() {
  const userInfo = useRecoilValue(userInfoAtom);
  const selectedChatType = useRecoilValue(selectedChatTypeAtom);


  const navigate = useNavigate();

  useEffect(()=>{

    if(!userInfo.profileSetup){
      toast('Please setup Profile first!', {
        icon: '⚠️',
      });
        navigate("/profile");
    }

  },[userInfo,navigate]);
  return (
    <div className="flex h-[100vh]  text-[#1f2937] overflow-hidden">
      <ContactContainer/>
      
      {selectedChatType ?  <ChatContainer/> : <EmptyChatContainer/>  }
   
    </div>
  )
}

export default Chat


