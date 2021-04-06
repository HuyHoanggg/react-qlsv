import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./App.css";

function App() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


return (
<div className="container">
  <h1>Danh sách học viên</h1>
  <Button variant="success" onClick={handleShow}>
    Add student
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Add student</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div>
        <form method="POST">
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-12 col-form-label">
              Full name <span>*</span>
            </label>
            <div className="col-sm-12">
              <input type="text" className="form-control" id="name" placeholder="Full name" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="dob" className="col-sm-12 col-form-label">
              Date of birth
            </label>
            <div className="col-sm-12">
              <input type="text" className="form-control" id="dob" placeholder="Date of birth" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-12 col-form-label">
              Email <span>*</span>
            </label>
            <div className="col-sm-12">
              <input type="text" className="form-control" id="email" placeholder="Email" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="phone" className="col-sm-12 col-form-label">
              Phone <span>*</span>
            </label>
            <div className="col-sm-12">
              <input type="number" className="form-control" id="phone" placeholder="Phone number" />
            </div>
          </div>
        </form>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  <table className="table table-striped table-hover">
    <thead>
      <tr>
        <th>Full name</th>
        <th>Date of birth</th>
        <th>Email</th>
        <th>Phone</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Winnifred Tribe</td>
        <td>2000</td>
        <td>wtribe@kickstarter.com</td>
        <td>867-130-6017</td>
        <td>
          <ul class="list-inline m-0 text-center">
            <li class="list-inline-item">
              <Button className="btn btn-primary btn-sm" onClick={handleShow}>
                Edit
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <form method="POST">
                      <div className="form-group row">
                        <label htmlFor="name" className="col-sm-12 col-form-label">
                          Full name <span>*</span>
                        </label>
                        <div className="col-sm-12">
                          <input type="text" className="form-control" id="name" placeholder="Full name" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="dob" className="col-sm-12 col-form-label">
                          Date of birth
                        </label>
                        <div className="col-sm-12">
                          <input type="text" className="form-control" id="dob" placeholder="Date of birth" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="email" className="col-sm-12 col-form-label">
                          Email <span>*</span>
                        </label>
                        <div className="col-sm-12">
                          <input type="text" className="form-control" id="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="phone" className="col-sm-12 col-form-label">
                          Phone <span>*</span>
                        </label>
                        <div className="col-sm-12">
                          <input type="number" className="form-control" id="phone" placeholder="Phone number" />
                        </div>
                      </div>
                    </form>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              <i class="fa fa-edit"></i>
            </li>
            <li class="list-inline-item">
              <Button variant="danger btn-sm" onClick={handleShow}>
                Delete
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Are you sure to delete this student?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <form method="POST">
                      <div className="form-group row">
                        <label htmlFor="name" className="col-sm-12 col-form-label">
                          Full name <span>*</span>
                        </label>
                        <div className="col-sm-12">
                          <input type="text" className="form-control" id="name" placeholder="Họ tên" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="dob" className="col-sm-12 col-form-label">
                          Date of birth
                        </label>
                        <div className="col-sm-12">
                          <input type="text" className="form-control" id="dob" placeholder="Năm sinh" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="email" className="col-sm-12 col-form-label">
                          Email <span>*</span>
                        </label>
                        <div className="col-sm-12">
                          <input type="text" className="form-control" id="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="phone" className="col-sm-12 col-form-label">
                          Phone number <span>*</span>
                        </label>
                        <div className="col-sm-12">
                          <input type="number" className="form-control" id="phone" placeholder="Số điện thoại" />
                        </div>
                      </div>
                    </form>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
);
}

export default App;