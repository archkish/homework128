import ContactsForm from "./ContactsForm";

export default function Modal({isShow, onClose}) {
  return (
    <div className={`my-modal-wrapper ${isShow ? "open" : ""}`}>
      <div className="my-modal">
        <div className="my-modal-header">
          {/* <div className="my-modal-title">Send me a message</div> */}
          <div className="my-modal-close">
            <button type="button" onClick={onClose}>&times;</button>
          </div>
        </div>
        <div className="my-modal-body">
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sapiente ex quisquam sunt blanditiis. Provident magni delectus alias recusandae dolores. Delectus dignissimos at mollitia tempore hic, sunt molestias iusto rem.</p>   */}
          <ContactsForm/>
        </div>
      </div>
    </div>
  )
}