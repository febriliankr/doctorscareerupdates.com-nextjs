import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import Head from "next/head";
import Footer from "../components/Footer";
import { storage, db, auth, timestamp } from "../config/firebaseConfig";
import Link from "next/link";

const Schema = yup.object().shape({
  name: yup.string().required().min(3),
  email: yup.string().required().email(),
  whatsapp: yup.number().required().min(6),
});

export default function PendaftaranFKUI() {
  const [image, setImage] = useState(null);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(Schema),
  });

  const selectImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  function checkAndAddToDatabase(name, email, instansi, whatsapp) {
    let uniqueCode = "DCU20" + Math.floor(Math.random() * 1000 + 1);
    db.collectionGroup("users")
      .where("uniqueCode", "==", uniqueCode)
      .get()
      .then((snapshot) => {
        const existingUniqueCode = snapshot.docs;
        if (existingUniqueCode.length) {
          checkAndAddToDatabase(name, email, instansi, whatsapp);
        } else {
          db.collection("users")
            .add({
              fkuiStudent: true,
              name,
              email,
              whatsapp,
              uniqueCode,
              timestamp,
            })
            .then(() => {
              setDisableSubmit(false);
            });
        }
      });
  }

  const onSubmit = (formData) => {
    if (!image) {
      alert("Silakan upload KTM anda terlebih dahulu");
      return;
    }
    console.log(formData);
    setDisableSubmit(true);
    const { name, email, instansi, whatsapp } = formData;

    db.collectionGroup("users")
      .where("email", "==", email)
      .get()
      .then((snapshot) => {
        // console.log("snapshot.docs", snapshot.docs);
        const existingEmail = snapshot.docs;
        if (existingEmail.length) {
          alert(`Alamat email ${email} telah terdaftar`);
          setDisableSubmit(false);
        } else {
          checkAndAddToDatabase(name, email, instansi, whatsapp);
        }
      });


  };

  const labelClick = (e) => {
    //labelclick makes change to checkbox
  };

  //errors.instansi && console.log("error name", errors.instansi);
  // console.log(errors);

  return (
    <>
      <Head>
        <title>Pendaftaran FKUI | DCU 2020</title>
        <link rel="icon" href="/dlogo.png" />
      </Head>

      <div className="home-container">
        <section>
          <div className="signup__form">
            <h1 className="register-text-heading">REGISTER NOW</h1>
            <p className="register-text">
              Pendaftaran DCU 2020 untuk Mahasiswa FKUI
            </p>

            <div className="input-areas">
              <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                  className={`register-input ${
                    errors.name ? "username-error" : null
                  }`}
                  name="name"
                  type="name"
                  placeholder="Nama Lengkap"
                  ref={register}
                />
                <p className="error-label">{errors.name?.message}</p>
                <input
                  className="register-input"
                  name="email"
                  type="email"
                  placeholder="Alamat Email"
                  ref={register}
                />
                <p className="error-label">{errors.email?.message}</p>
                <label>Upload foto KTM</label>
                <input
                  type="file"
                  className="custom-upload"
                  onChange={selectImage}
                />
                <p className="error-label">{errors.instansi?.message}</p>
                <input
                  className="register-input"
                  name="whatsapp"
                  type="tel"
                  placeholder="Nomor Whatsapp"
                  ref={register}
                />
                <p className="error-label">{errors.whatsapp?.message}</p>

                <div className="pt-1">
                  <button disabled={disableSubmit} onClick={handleSubmit}>
                    Register
                  </button>
                </div>
              </form>
            </div>

            {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
            <Link href="/pendaftaran-umum">
              <p className="mt-2 link">Pendaftaran untuk Umum</p>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
