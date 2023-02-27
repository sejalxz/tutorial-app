import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function AddTutorial() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const tutorial = { title, description, status };
    // console.log("123");

    fetch("http://localhost:8080/add", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(tutorial),
    })
      .then((res) => {
        alert("New Tutorial Added Successfully!");
        navigate("/tutorials");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h3>Add Tutorial</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Title</label>
                      <input
                        value={title}
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-check">
                      <label className="form-check-label">is Published</label>
                      <input
                        className="form-check-input"
                        checked={status}
                        onChange={(e) => setStatus(e.target.checked)}
                        type="checkbox"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Submit
                      </button>
                      <Link to="/" className="btn btn-info">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTutorial;
