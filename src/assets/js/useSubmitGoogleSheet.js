import { useState } from "react";

function useSubmitGoogleSheet() {
  const [modalMessage, setModalMessage] = useState({ head: "", body: "" });
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwHEK6y9AmSg7149c4LnqNfQxHGq-HVLiY88YrkKPsHY-UJ5RIB3cWkrRVej0IV6bE/exec";

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("Email", email);
    data.append("Message", msg);

    setIsPending(true);

    try {
      const response = await fetch(scriptURL, { method: "POST", body: data });

      if (response.ok) {
        setIsFormSubmitted(true);
        setIsPending(false);

        setModalMessage({
          head: "Hi!",
          body: "Thank you for reaching out! I will respond to you as soon as possible.",
        });
        setEmail("");
        setMsg("");
        console.log("111");
      } else {
        setModalMessage({
          head: "Sorry!",
          body: "The message send is unsuccessful, please try later",
        });
      }
    } catch (error) {
      console.log("Submit Error: " + error);
      setModalMessage({ head: "Sorry!", body: `An error occured: ${error}` });
    }
  };

  return {
    modalMessage,
    email,
    setEmail,
    msg,
    setMsg,
    isPending,
    isFormSubmitted,
    setIsFormSubmitted,
    submitHandler,
  };
}

export default useSubmitGoogleSheet;
