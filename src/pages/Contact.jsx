export default function Contact() {
  return (
    <div className="contactCard">
      <h2 className="contactTitle">Contact Me!</h2>
      <p className="contactDiscription">
        <form>
          <h3>Name:</h3>
          <input type="text" id="name" name="name" size="50" />
          <h3>Email Address:</h3>
          <input type="text" id="email" name="email" size="50" />
          <h3>Message:</h3>
          <textarea id="message" name="message" rows="10" cols="50" />
          <button>Submit</button>
        </form>
      </p>
    </div>
  );
}