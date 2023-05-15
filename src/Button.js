import React from 'react'

function Button() {
    return (

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Project Settings</h6>
            </div>
            <div className="card-body">
                <p>In this Page all the Buttons are only sample of video Editor page reference(Not working) ... <code>its only for Demo</code> </p>
                <a href="#" className="btn btn-primary btn-icon-split">
                    <span className="icon text-white-50">
                        <i className="fas fa-flag"></i>
                    </span>
                    <span className="text">Size</span>
                </a>
                <div className="my-2"></div>
                <a href="#" className="btn btn-success btn-icon-split">
                    <span className="icon text-white-50">
                        <i className="fas fa-check"></i>
                    </span>
                    <span className="text">Background</span>
                </a>
                <div className="my-2"></div>
                <a href="#" className="btn btn-info btn-icon-split">
                    <span className="icon text-white-50">
                        <i className="fas fa-info-circle"></i>
                    </span>
                    <span className="text">Audio</span>
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
                    <span className="text">Blur</span>
                </a>
                <div className="my-2"></div>
                <a href="#" className="btn btn-secondary btn-icon-split">
                    <span className="icon text-white-50">
                        <i className="fas fa-arrow-right"></i>
                    </span>
                    <span className="text">Saturation</span>
                </a>
                <div className="my-2"></div>
                <a href="#" className="btn btn-light btn-icon-split">
                    <span className="icon text-gray-600">
                        <i className="fas fa-arrow-right"></i>
                    </span>
                    <span className="text">Slow Motion</span>
                </a>
                <div className="mb-4"></div>
                <p>Assets</p>
                <a href="#" className="btn btn-primary btn-icon-split btn-sm">
                    <span className="icon text-white-50">
                        <i className="fas fa-flag"></i>
                    </span>
                    <span className="text">Track 1</span>
                </a>
                <div className="my-2"></div>
                <a href="#" className="btn btn-primary btn-icon-split btn-lg">
                    <span className="icon text-white-50">
                        <i className="fas fa-flag"></i>
                    </span>
                    <span className="text">Track 2</span>
                </a>
            </div>
        </div>
    )
}

export default Button