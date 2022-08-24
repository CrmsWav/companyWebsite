import React from "react";
import datasCompany from "../../datas/company.json";
import PageTitle from "../../components/PagesTitle";
import "./Services.css";

interface ServicesProps{

}

const Services: React.FC<ServicesProps> = () => {
  const datas = datasCompany.company;

  return (
    <div className="ServicesPage">
      <PageTitle name="Nos Services" />

      <div className="tableContainer">
        <table>
          <caption>Récapitulatif de tout les services de DropTeam</caption>

          <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Description</th>
            <th scope="col">Id</th>
          </tr>
          </thead>

          <tbody>
          {datas.services.map((data) =>
            <tr>
              <td>{data.name}</td>
              <td>{data.description}</td>
              <td>{data.id}</td>
            </tr>
          )}
          </tbody>

          <tfoot>
          <tr>
            <th scope="row">Nombre total de services</th>
            <td>{datas.services.length}</td>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Services;
