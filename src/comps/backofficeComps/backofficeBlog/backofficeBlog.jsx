import { useEffect } from "react";
import styles from "./backofficeBlog.module.css";
import SimpleGet from "../../../hooks/useSimpleGet";
import useSimpleGet from "../../../hooks/useSimpleGet";
import LoadingSpinner from "../../loadingSpinner/loadingSpinner.jsx";
import ErrorBox from "../../errorBox/errorBox";
import Table from "../table/table.jsx";
import { useState } from "react";
import { useSimplePost } from "../../../hooks/useSimplePost.jsx";
import { useLocalStorage } from "@uidotdev/usehooks";
import useDelete from "../../../hooks/useDelete.jsx";

export default function BackofficeBlog({}) {
  const get = useSimpleGet("blogs");
  const send = useSimplePost();
  const deleteHook = useDelete();
  const [user, setUser] = useLocalStorage("user", null);

  const [deleteError, setDeleteError] = useState(null);
  const [addError, setAddError] = useState(null);
  const [updateError, setUpdateError] = useState(null);

  useEffect(() => {
    if (get.data == null) return;
  }, [get.data]);

  const addBlog = (event) => {
    event.preventDefault();
    setAddError(null);
    const fd = new FormData(event.target);

    const title = fd.get("title");
    const teaser = fd.get("teaser");
    const desc = fd.get("description");
    const img = fd.get("file");

    if (!title || !teaser || !desc) {
      setAddError("Skal udfylde felterne!");
      return;
    }

    if (!img || !img.size > 0) {
      setAddError("Skal vælge en fil!");
      return;
    }
    send
      .sendRequestFORM("blog", fd, user.token)
      .then((val) => {
        if (val.status != "ok") {
          throw new Error(val.message);
        }

        get.get("blogs");
      })
      .catch((error) => {
        setAddError(error.message);
      });
  };

  const updateBlog = (event) => {
    event.preventDefault();
    setUpdateError(null);
    const fd = new FormData(event.target);

    const title = fd.get("title");
    const id = fd.get("id");
    const desc = fd.get("description");
    const img = fd.get("file");

    if (!title || !desc || !id) {
      setUpdateError("Skal udfylde felterne!");
      return;
    }

    if (!img || !img.size > 0) {
      setUpdateError("Skal vælge en fil!");
      return;
    }

    fetch("http://localhost:3042/blog", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${user.token}`,
      },
      body: fd,
    })
      .then((val) => {
        if (!val.ok) {
          throw new Error("Skete en fejl. Prøv igen. Evt forkert id.");
        }

        return val.json();
      })
      .then((val) => {
        if (val.status != "ok") {
          throw new Error("Skete en fejl. Prøv igen.");
        }
        get.get("blogs");
      })
      .catch((error) => {
        setUpdateError(error.message);
      });
  };

  //Blever passed til table, som giver den et id.
  const deleteFunc = (id) => {
    setDeleteError(null);
    deleteHook
      .sendRequest(`blog/${id}`, user.token)
      .then((val) => {
        if (val.status != "ok") {
          throw new Error(val.message);
        }
        get.get("blogs");
      })
      .catch((error) => {
        setDeleteError(error.message);
      });
  };

  return (
    <div className="container">
      <section className={styles.page}>
        {deleteError && <ErrorBox animate={true} msg={deleteError} />}
        {get.loading && <LoadingSpinner />}
        {get.error && <ErrorBox animate={true} msg={get.error} />}
        {get?.data?.data && (
          <Table ArrayToUse={get?.data?.data} deleteFunc={deleteFunc} />
        )}

        <div className={styles.forms}>
          <form noValidate onSubmit={addBlog}>
            <h2>Add blog</h2>
            <div>
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" placeholder="Title" />
            </div>
            <div>
              <label htmlFor="teaser">Teaser</label>
              <textarea
                id="teaser"
                placeholder="Enter teaser"
                name="teaser"
              ></textarea>
            </div>
            <div>
              <label htmlFor="desc">Description</label>
              <textarea
                id="desc"
                placeholder="Enter description"
                name="description"
              ></textarea>
            </div>
            <div>
              <label htmlFor="img">Image</label>
              <input type="file" name="file" id="img" />
            </div>
            <input type="submit" value={"Add new blog"} />
            {addError && <ErrorBox animate={true} msg={addError} />}
          </form>

          <form onSubmit={updateBlog}>
            <h2>Update blog</h2>
            <div>
              <label htmlFor="id">Id</label>
              <input type="text" id="id" name="id" placeholder="Id" />
            </div>
            <div>
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" placeholder="Title" />
            </div>
            <div>
              <label htmlFor="img">Image</label>
              <input type="file" name="file" id="file" />
            </div>
            <div>
              <label htmlFor="desc">Description</label>
              <textarea
                id="desc"
                placeholder="Enter description"
                name="description"
              ></textarea>
            </div>
            <input type="submit" value={"Update blog"} />
            {updateError && <ErrorBox msg={updateError} animate={true} />}
          </form>
        </div>
      </section>
    </div>
  );
}
