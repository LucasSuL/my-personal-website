import { React, useState } from "react";
import resume from "../../downloads/Lucas Su Resume.pdf";
import transcript from "../../downloads/Lucas Su Transcript Jan 2024.pdf";
import portfolio from "../../downloads/Portfolio_Su Lijie 2022.2_compressed.pdf";
import pianoComposition from "../../downloads/Starry Night.pdf";
import "../../styles/footer.css";

export default function Footer() {
  const [modalMessage, setModalMessage] = useState({ head: "", body: "" });
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwHEK6y9AmSg7149c4LnqNfQxHGq-HVLiY88YrkKPsHY-UJ5RIB3cWkrRVej0IV6bE/exec";

  const closeModal = () => {
    setIsFormSubmitted(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit");

    const data = new FormData();
    data.append("Email", email);
    data.append("Message", msg);

    setIsPending(true);

    try {
      const response = await fetch(scriptURL, { method: "POST", body: data });

      if (response.ok) {
        console.log("response.ok");
        setIsFormSubmitted(true);
        setIsPending(false);

        setModalMessage({
          head: "Submit successful!",
          body: "Thank you for reaching out! I will respond to you as soon as possible.",
        });
        setEmail("");
        setMsg("");
        window.jQuery("#exampleModal").modal("show");
      } else {
        console.log("response.error");
        setModalMessage({
          head: "Sorry!",
          body: "The message send is unsuccessful, please try later",
        });
      }
    } catch (error) {
      console.log("submit.error: " + error);
      setModalMessage({ head: "Sorry!", body: `An error occured: ${error}` });
    }
  };

  return (
    <div class="container-fluid text-bg-dark d-flex justify-content-center p-0">
      <div className="container " style={{ maxWidth: "1200px" }}>
        <footer class="col container py-5">
          <div class="row">
            <div class="col-6 col-sm-4 col-md-2 mb-3">
              <h5>Nav-link</h5>
              <ul class="flex-column list-unstyled">
                <li class="mb-2">
                  <a href="#" class=" p-0 text-secondary text-decoration-none">
                    Home
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#about"
                    class="p-0 text-secondary text-decoration-none"
                  >
                    About me
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#skills"
                    class="p-0 text-secondary text-decoration-none"
                  >
                    Skills
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#experience"
                    class="p-0 text-secondary text-decoration-none"
                  >
                    Experience
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#articles"
                    class="p-0 text-secondary text-decoration-none"
                  >
                    Articles
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-6 col-sm-4 col-md-2 mb-3">
              <h5>About</h5>
              <ul class="flex-column list-unstyled">
                <li class="mb-2">
                  <a
                    href="https://www.linkedin.com/in/lucassudev/"
                    class="p-0 text-secondary text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn <i class="bi bi-arrow-up-right fs-8"></i>
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="https://github.com/LucasSuL"
                    class="p-0 text-secondary text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <i class="bi bi-arrow-up-right fs-8"></i>
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="https://dev.to/lucassul"
                    class="p-0 text-secondary text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dev Community <i class="bi bi-arrow-up-right fs-8"></i>
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="https://www.strava.com/athletes/84823175"
                    class="p-0 text-secondary text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Strava <i class="bi bi-arrow-up-right fs-8"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-sm-4 col-md-3 mb-3">
              <h5 id="downloads">Downloads</h5>
              <ul class="flex-column list-unstyled">
                <li class="mb-2">
                  <a
                    href={resume}
                    download
                    class="p-0 text-secondary text-decoration-none"
                  >
                    My Resume <i class="bi bi-download"></i>
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href={transcript}
                    download
                    class="p-0 text-secondary text-decoration-none"
                  >
                    Graduate Transcript <i class="bi bi-download"></i>
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href={portfolio}
                    download
                    class="p-0 text-secondary text-decoration-none"
                  >
                    Urban Planner Portfolio <i class="bi bi-download"></i>
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href={pianoComposition}
                    download
                    class="p-0 text-secondary text-decoration-none"
                  >
                    My Piano Composition <i class="bi bi-download"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-4 offset-md-1 mb-3">
              <form name="submit-to-google-sheet" onSubmit={submitHandler}>
                <h5 class="mb-3">Leave a message</h5>
                <div
                  class="d-flex flex-column w-100 gap-2"
                  style={{ maxWidth: "400px" }}
                >
                  <div class="mb-2">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label visually-hidden"
                    >
                      Email address
                    </label>
                    <input
                      required
                      type="email"
                      class="form-control"
                      name="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="exampleFormControlInput1"
                      placeholder="Email address"
                    />
                  </div>
                  <div class="mb-2">
                    <label
                      for="exampleFormControlTextarea1"
                      class="form-label visually-hidden"
                    >
                      Example textarea
                    </label>
                    <textarea
                      required
                      class="form-control"
                      name="Message"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  {!isPending && (
                    <button
                      class="btn btn-primary"
                      data-bs-toggle={isFormSubmitted ? "modal" : ""}
                      data-bs-target={isFormSubmitted ? "#exampleModal" : ""}
                      type="submit"
                    >
                      Submit
                    </button>
                  )}
                  {isPending && (
                    <button disabled class="btn btn-primary" type="submit">
                      Submitting...
                    </button>
                  )}
                </div>
              </form>
              <div
                class="modal fade text-dark"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        {modalMessage.head}
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">{modalMessage.body}</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex flex-column text-center pt-4 mt-4 border-top border-secondary">
            <p>
              Built at <i class="fas fa-moon" /> by{" "}
              <a
                href="https://github.com/LucasSuL/my-personal-website"
                target="_blank"
                rel="noreferrer"
                class="text-decoration-none text-light fw-bold text-header"
              >
                Lucas Su
              </a>
            </p>
            <div class="d-flex justify-content-center align-items-center mb-4 ">
              <span class=" text-secondary text-s-2">Made with</span>
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                rel="noreferrer"
                class="cust-foot"
              >
                <span>
                  <i class="fa-brands fa-bootstrap fa-2xl ms-2 text-white fs-3"></i>
                </span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
    // <div>
    //     <form name="submit-to-google-sheet" onSubmit={submitHandler}>
    //         <h5 class="mb-2">Leave a message</h5>
    //         <div class="d-flex flex-column w-100 gap-2" style={{ maxWidth: "400px" }}>
    //             <div class="mb-2">
    //                 <label for="exampleFormControlInput1" class="form-label visually-hidden">Email address</label>
    //                 <input required
    //                     type="email"
    //                     class="form-control"
    //                     name="Email"
    //                     value={email}
    //                     onChange={(e) => setEmail(e.target.value)}
    //                     id="exampleFormControlInput1"
    //                     placeholder="Email address" />
    //             </div>
    //             <div class="mb-2">
    //                 <label for="exampleFormControlTextarea1" class="form-label visually-hidden" >Example textarea</label>
    //                 <textarea required
    //                     class="form-control"
    //                     name="Message"
    //                     value={msg}
    //                     onChange={(e) => setMsg(e.target.value)}
    //                     id="exampleFormControlTextarea1"
    //                     rows="3" ></textarea>
    //             </div>
    //             {!isPending &&
    //                 <button
    //                     class="btn btn-primary"
    //                     data-bs-toggle={isFormSubmitted ? 'modal' : ''}
    //                     data-bs-target={isFormSubmitted ? '#exampleModal' : ''}
    //                     type="submit">Submit
    //                 </button>}
    //             {isPending && <button disabled
    //                 class="btn btn-primary"
    //                 type="submit">Submitting...
    //             </button>}
    //         </div>
    //     </form>
    //     {console.log('modal.render = ' + isFormSubmitted)}
    //     <div class="modal fade text-dark" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //         <div class="modal-dialog modal-dialog-centered">
    //             <div class="modal-content">
    //                 <div class="modal-header">
    //                     <h1 class="modal-title fs-5" id="exampleModalLabel">{modalMessage.head}</h1>
    //                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //                 </div>
    //                 <div class="modal-body">{modalMessage.body}</div>
    //                 <div class="modal-footer">
    //                     <button
    //                         type="button"
    //                         class="btn btn-secondary"
    //                         data-bs-dismiss="modal"
    //                         onClick={closeModal}
    //                     >Close</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
}
