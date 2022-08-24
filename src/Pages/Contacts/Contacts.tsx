import React from "react";
import PageTitle from "../../components/PagesTitle";
import datasCompany from "../../datas/company.json";

const Contacts = () => {
  const datas = datasCompany.company.companyInformations;
  console.log(datas);

  return (
    <div>
      <PageTitle name="Contacts" />

      <p>Adresse : {datas.address}</p>
      <p>Numéro de téléphone : {datas.phoneNumber}</p>
      <p>E-Mail : {datas.mail}</p>


      {/* Votre mail, votre tel, objet du mail, message */}
      <form>
        <input type="email" name="inputMail" required />
        <input type="email" name="inputMail" required />
        <input type="email" name="inputMail" required />
        <textarea />
        <button>Envoyer</button>
      </form>
    </div>
  );
}

export default Contacts;
