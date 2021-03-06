import React, {Component} from 'react';

class Dashboard extends Component{
    render(){
        return(
            <section className="section">
                <div className="section-header">
                    <h1>Editor</h1>
                    <div className="section-header-breadcrumb">
                        <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
                        <div className="breadcrumb-item"><a href="#">Forms</a></div>
                        <div className="breadcrumb-item">Editor</div>
                    </div>
                </div>

                <div className="section-body">
                    <h2 className="section-title">Editor</h2>
                    <p className="section-lead">WYSIWYG editor and code editor.</p>

                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Simple Summernote</h4>
                                </div>
                                <div className="card-body">
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Title</label>
                                        <div className="col-sm-12 col-md-7">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Category</label>
                                        <div className="col-sm-12 col-md-7">
                                            <select className="form-control selectric">
                                            <option>Tech</option>
                                            <option>News</option>
                                            <option>Political</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Content</label>
                                        <div className="col-sm-12 col-md-7">
                                            <textarea className="summernote-simple"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3"></label>
                                        <div className="col-sm-12 col-md-7">
                                            <button className="btn btn-primary">Publish</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Dashboard;