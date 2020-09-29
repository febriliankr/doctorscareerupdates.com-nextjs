import React from "react";

function Rewind() {
  return (
    <div className="container">
      <h2>Apa kata mereka tentang DCU?</h2>
      <p>
        Doctor’s Career Updates 2020 merupakan acara 2 tahun sekali yang
        diselenggarakan oleh Departemen Pendidikan dan Profesi BEM IKM FKUI
        untuk memperkenalkan berbagai profesi dan karir yang berhubungan dengan
        bidang kedokteran di Indonesia melalui seminar, <i>talkshow</i>, dan <i>exihibition</i>.
      </p>


      <style jsx>
        {`
          .container {
            box-shadow: 0px 10px 40px -10px rgba(0,0,0,0.07);
            border-radius: 8px;
              margin: 50px auto;
              background-color: white;
            max-width: 1000px;
            padding: 30px 85px 50px 85px;
            color: #5b6987;
          }
          p {
            font-size: 20px;
          }
          .more {
              font-size: 18px;
          }
        `}
      </style>
    </div>
  );
}

export default Rewind;
