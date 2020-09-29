import Link from "next/link";
import React from "react";

function EventDetails() {
  return (
    <div className="eventdetails__container">
      <h2>Apa itu Doctors' Career Updates?</h2>
      <p>
        Doctor’s Career Updates 2020 merupakan acara 2 tahun sekali yang
        diselenggarakan oleh Departemen Pendidikan dan Profesi BEM IKM FKUI
        untuk memperkenalkan berbagai profesi dan karir yang berhubungan dengan
        bidang kedokteran di Indonesia melalui seminar, <i>talkshow</i>, dan{" "}
        <i>exihibition</i>.
      </p>

      <h2>DCU Medical Games (DCU MG)</h2>
      <p>
        Merupakan sebuah <i>pre-event</i> DCU 2020 dengan mengadakan perlombaan
        kedokteran yang bersifat <i>open registration</i> bagi mahasiswa
        kedokteran preklinik.
      </p>
      <Link href="/dcu-mg"><p className="more">Pelajari Lebih Lanjut →</p></Link>
    </div>
  );
}

export default EventDetails;
