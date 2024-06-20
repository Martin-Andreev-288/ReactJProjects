import { Form } from "react-router-dom";
/* MNOGO E VAZHNO da ima name v input-a, inache tazi funkcionalnost (t.e. dokolkoto
shvanah neshtata ot prednite screenshot-i i tezi ot tazi lekciq) nqma da rabotqt
AKO SAMO DOBAVQ required v input-a - nqma da mozhe da submitnem formata, ako tova konkretno
pole e prazno (dobavqm go tuk, za da se vidi, sled tova go triq, ponezhe i instruktora go
iztri) */
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  return null;
};

const Newsletter = () => {
  // tuk gledame kak da submitnem formi v po-novata React Router versiq
  return (
    <Form className="form" method="POST">
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
          required
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
    </Form>
  );
};
export default Newsletter;
