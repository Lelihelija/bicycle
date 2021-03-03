import { React } from "react";
import { Container } from "react-bootstrap";

function CompanyInfo () {
  return (
    <div className="companyinfo">
      <Container>
        <div className="companyinfo__inner">
          <p className="companyinfo-text"><b>STREETSTER</b> – Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/><br/> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </Container>
    </div>
  )
};

export default CompanyInfo;