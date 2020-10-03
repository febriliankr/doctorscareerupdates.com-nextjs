import Link from "next/link";
import { useRouter } from "next/router";

function RewindComponent() {
  return (
    <div className="rewindphotos__container">
      <h2
      style={{
        textAlign: "center",
        color: "#424a5e",
        padding: "0 10px"
      }}>
        Apa kata mereka tentang DCU?
      </h2>

      <div className="box">
        <Link href="/rewind#alessafahira">
          <div className="card">
            <div className="imgBx">
              <img src="alessafahira.webp" alt="images" />
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

        <Link href="/rewind#anggawiratama">
          <div className="card">
            <div className="imgBx">
              <img src="anggawiratama.webp" alt="images" />
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

        <Link href="/rewind#dioalief">
          <div className="card">
            <div className="imgBx">
              <img src="dioalief.webp" alt="Dio Alief" />
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
