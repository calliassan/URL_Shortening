import { useState } from "react";
import api from "../serviceapi/api";
import { useEffect } from "react";

export function Dashboard() {
  const [getdatas, setdatas] = useState([]);
  const [Errors, setErrors] = useState("");
  const getdashboard = async () => {
    try {
      const getdata = await api.get("dashboard");
      setdatas(getdata.data.data);
    } catch (error) {
      if (error.response) {
        setErrors(error.response?.data?.message);
      }
    }
  };
  useEffect(() => {
    getdashboard();
  }, []);
  return (
    <>
      {Errors && <p style={{ color: "red" }}>Errors</p>}
      {getdatas.map((datas) => (
        <div key={datas._id} className="tableclass">
          <table>
            <thead>
              <tr>
                <th>Original</th>
                <th>Short</th>
                <th>Clicks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{datas.originalUrl}</td>
                <td>{datas.shortUrl}</td>
                <td>{datas.clicks}</td>
              </tr>
            </tbody>
          </table>

          {/* <h2>{datas.shortUrl}</h2>
          <h2>{datas.originalUrl}</h2>
          <h2>{datas.clicks}</h2> */}
        </div>
      ))}
    </>
  );
}
