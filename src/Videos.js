import React from 'react'

function Videos() {
  return (
    <div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Videos Settings</h6>
    </div>
    <div className="card-body">
        <p>In this Page are only sample of video  reference(Not working) ... <code>its only for Demo</code> </p>
        <a href="#" className="btn btn-primary btn-icon-split">
            <span className="icon text-white-50">
                <i className="fas fa-flag"></i>
            </span>
            <span className="text">Opacity</span>
        </a>
        <div className="my-2"></div>
        <a href="#" className="btn btn-success btn-icon-split">
            <span className="icon text-white-50">
                <i className="fas fa-check"></i>
            </span>
            <span className="text">Merge</span>
        </a>
        <div className="my-2"></div>
        <a href="#" className="btn btn-info btn-icon-split">
            <span className="icon text-white-50">
                <i className="fas fa-info-circle"></i>
            </span>
            <span className="text">Rotation</span>
        </a>
        <div className="my-2"></div>
        <a href="#" className="btn btn-warning btn-icon-split">
            <span className="icon text-white-50">
                <i className="fas fa-exclamation-triangle"></i>
            </span>
            <span className="text">Duration</span>
        </a>
        <div className="my-2"></div>
        <a href="#" className="btn btn-danger btn-icon-split">
            <span className="icon text-white-50">
                <i className="fas fa-trash"></i>
            </span>
            <span className="text">Postion</span>
        </a>
        <div className="my-2"></div>
        <a href="#" className="btn btn-secondary btn-icon-split">
            <span className="icon text-white-50">
                <i className="fas fa-arrow-right"></i>
            </span>
            <span className="text">Scale</span>
        </a>
        <div className="my-2"></div>
        <a href="#" className="btn btn-light btn-icon-split">
            <span className="icon text-gray-600">
                <i className="fas fa-arrow-right"></i>
            </span>
            <span className="text">Effects</span>
        </a>
        <div className="mb-4"></div>
        <h1>Recent Videos</h1>
        <a href="#" className="btn btn-primary btn-icon-split btn-sm">
            <span className="icon text-white-50">
                <i className="fas fa-flag"></i>
            </span>
            <span className="text">Project 1</span>
        </a>
        <div className="my-2"></div>
        <a href="#" className="btn btn-primary btn-icon-split btn-lg">
            <span className="icon text-white-50">
                <i className="fas fa-flag"></i>
            </span>
            <span className="text">Project 2</span>
        </a>
    </div>
</div>
  )
}

export default Videos