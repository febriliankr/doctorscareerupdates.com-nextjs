import React from "react";

function EventDetails() {
  return (
    <div className="container">
      <h2>Apa itu Doctors' Career Updates?</h2>
      <p>
        Doctor’s Career Updates 2020 merupakan acara 2 tahun sekali yang
        diselenggarakan oleh Departemen Pendidikan dan Profesi BEM IKM FKUI
        untuk memperkenalkan berbagai profesi dan karir yang berhubungan dengan
        bidang kedokteran di Indonesia melalui seminar, <i>talkshow</i>, dan <i>exihibition</i>.
      </p>

      <h2>DCU Medical Games (DCU MG)</h2>
      <p>
        Merupakan sebuah <i>pre-event</i> DCU 2020 dengan mengadakan perlombaan
        kedokteran yang bersifat <i>open registration</i> bagi mahasiswa kedokteran
        preklinik.
      </p>
      <p className="more">Pelajari Lebih Lanjut →</p>

      <style jsx>
        {`
          .container {
            box-shadow: 0px 10px 40px -10px rgba(0,0,0,0.07);
            border-radius: 8px;
              margin: 50px auto;
              background-color: white;
            max-width: 1000px;
            padding: 30px 85px 50px 85px;
            color: #424a5e;
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

export default EventDetails;
