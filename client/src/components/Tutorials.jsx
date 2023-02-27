import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TutorialListing() {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/tutorials")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTutorials(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   const url = "http://localhost:8080/tutorials";

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url, {
  //         method: "GET",
  //         withCredentials: true,
  //         crossorigin: true,
  //         mode: "no-cors",
  //       });
  //       console.log(response);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Tutorial listing</h2>
        </div>
        <div className="card-body">
          <div>
            <Link to="/post" className="btn btn-success">
              Add New(+)
            </Link>
          </div>

          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Title</td>
                <td>Description</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {tutorials &&
                tutorials.map((tutorial) => {
                  return (
                    <tr key={tutorial.id}>
                      <td>{tutorial.title}</td>
                      <td>{tutorial.description}</td>
                      <td>
                        <Link to="/tutorials/:id" className="btn">
                          View
                        </Link>
                        <Link to={`/edit/${tutorial.id}`} className="btn">
                          Edit
                        </Link>
                        <Link to="/tutorials" className="btn">
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {tutorials && (
            <button className="btn btn-danger" id="btnRemoveAll">
              Remove All
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TutorialListing;
