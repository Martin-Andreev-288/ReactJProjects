const Newsletter = () => {
  // s vite mozhem da prashtame get zaqvki, no pri post zaqvkite stava obyrkvane. Ako dobavim method='POST' taka, shte stane greshka. V drugata lekciq se pokazva kak mozhe da stane tova
  return (
    <form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          defaultValue="john"
        />
      </div>
      {/* lastName */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          lastName
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          defaultValue="smith"
        />
      </div>
      {/* email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
      >
        submit
      </button>
    </form>
  );
};
export default Newsletter;
