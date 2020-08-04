import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";
import "./style.css";
import PageHeader from "../../components/PageHeader";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">Teste</PageHeader>
    </div>
  );
}

export default TeacherList;
