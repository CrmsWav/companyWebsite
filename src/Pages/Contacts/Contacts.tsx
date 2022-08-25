import React from "react";
import PageTitle from "../../components/PagesTitle";
import datasCompany from "../../datas/company.json";
import TextField from '@mui/joy/TextField';
import {TextareaAutosize} from "@mui/material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import styled from "styled-components";
import "./Contacts.css";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ContactsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Informations = styled.div`
  border: white solid 1px;
  border-radius: 10px;
  font-size: small;
  padding: 0.5% 10% 0.5% 2.5%;
  margin: 5% 5% 5% 0;
  text-align: left;
`;
const Title = styled.h2`
    margin-bottom: 20%;
`;

const Contacts = () => {
  const datas = datasCompany.company.companyInformations;

  const handleSubmit = () => {
    console.log("submit")
  }

  return (
    <PageContainer>
      <ContactsContainer>
        <PageTitle name="Contacts" />

        <div className="InformationsContainer">
          <Informations className="Informations">
            <Title>Dropteam</Title>

            <p>{datas.address}</p>

            <p>{datas.phoneNumber}</p>

            <p>{datas.mail}</p>
          </Informations>
        </div>

        {/* Votre mail, votre tel, objet du mail, message */}
        <ContactForm className="ContactForm" onSubmit={handleSubmit}>
          <div className="textFieldContainer">
            <TextField size="lg" label="Votre Email" placeholder="Email" className="TextField" />
            <TextField size="lg" label="Votre Téléphone" placeholder="Téléphone" className="TextField" />
            <TextField size="lg" label="Objet de votre demande" placeholder="Objet" className="TextField" />
          </div>

          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Votre Demande"
            style={{ width: 300, height: 150 }}
            className="TextareaAutosize"
          />

          <Button variant="contained" endIcon={<SendIcon />} type="submit">
            Envoyer
          </Button>
        </ContactForm>
      </ContactsContainer>
    </PageContainer>
  );
}

export default Contacts;
