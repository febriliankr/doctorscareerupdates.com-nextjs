import Link from "next/link";
import { useRouter } from "next/router";

function RewindComponent() {
  return (
    <div className="container">
      <h2
        style={{
          textAlign: "center",
          marginBottom: "50px",
          color: "#5b6987",
        }}
      >
        Apa kata mereka tentang DCU?
      </h2>

      <div className="box">
        <Link href="/rewind">
          <div className="card">
            <div className="imgBx">
              <img src="alessafahira.png" alt="images" />
            </div>
            <div className="details">
              <h2>
                Alessa Fahira
                <br />
                <span>PO</span>
              </h2>
            </div>
          </div>
        </Link>

        <Link href="/rewind">
          <div className="card">
            <div className="imgBx">
              <img src="angga.jpg" alt="images" />
            </div>
            <div className="details">
              <h2>
                Angga Wiratama
                <br />
                <span>PO DCU 2016</span>
              </h2>
            </div>
          </div>
        </Link>

        <Link href="/rewind">
          <div className="card">
            <div className="imgBx">
              <img src="dioalief.jpg" alt="Dio Alief" />
            </div>
            <div className="details">
              <h2>
                Dio Alief Supriyanto
                <br />
                <span>Ketua BEM IKM FKUI 2019</span>
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default RewindComponent;
