import React from "react";
import { Link } from "react-router-dom";

const AdminTopNav = () => {
  return (
    <nav className="navbar navbar-dark fixed-top">
      <span className="navbar-brand text-white col-sm-3 col-md-2">
        Election Commission
      </span>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <Link to="/" className="btn btn-outline-danger">
            Sign Out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const AdminSideNav = () => {
  return (
    <nav className="sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/admin/candidate_form" className="nav-link">
            Candidate Form
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/committee_form" className="nav-link">
            Committee Form
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/hmc_form" className="nav-link">
            HMC Form
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/candidate_list" className="nav-link">
            Candidates
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/committee_list" className="nav-link">
            Committees
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/vote_view" className="nav-link">
            Votes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const AdminNav = () => {
  return (
    <div>
      <AdminTopNav />
      <AdminSideNav />
    </div>
  );
};

export default AdminNav;
