import React from "react";

const ProfileComponent = () =>
    <div className="container">
        <h1>Profile</h1>

        <div className="form-group row">
            <label htmlFor="username" className="col-sm-2 col-form-label">
                Username</label>
            <div className="col-sm-10">
                <input type="text"
                       readOnly
                       className="form-control wbdv-field wbdv-username"
                       id="username"
                       value="alice"/>
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="password" className="col-sm-2 col-form-label">
                Password</label>
            <div className="col-sm-10">
                <input className="form-control wbdv-field wbdv-password"
                       id="password"
                       type="password"
                       placeholder="123qwe#$%"/>
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="phone" className="col-sm-2 col-form-label">
                Phone</label>
            <div className="col-sm-10">
                <input className="form-control wbdv-field wbdv-phone"
                       id="phone"
                       placeholder="(555) 123-4324"/>
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
                Email</label>
            <div className="col-sm-10">
                <input className="form-control wbdv-field wbdv-email"
                       id="email"
                       title="please provide your email"
                       placeholder="alice@wonderland.com"
                       type="email"/>
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="dob" className="col-sm-2 col-form-label">
                DOB</label>
            <div className="col-sm-10">
                <input className="form-control wbdv-field wbdv-dob"
                       id="dob"
                       placeholder="mm/dd/yyyy"
                       type="date"/>
            </div>
        </div>

        <div className="form-group row">
            <label className="col-sm-2 col-form-label">
                Role </label>
            <div className="col-sm-10">
                <select className="form-control wbdv-field wbdv-role">
                    <option>
                        Beginner
                    </option>
                    <option>
                        Advanced
                    </option>
                    <option>
                        Admin
                    </option>
                </select>
            </div>
        </div>

        <div className="form-group row">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
                <button className="btn btn-success btn-block wbdv-button wbdv-update"
                        onClick="">Update
                </button>
            </div>

        </div>

        <div className="form-group row">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
                <a className="btn btn-danger btn-block wbdv-button wbdv-logout"
                   href="../"
                   id="wbdv-logout">
                    Logout
                </a>
            </div>
        </div>
    </div>

export default ProfileComponent;
