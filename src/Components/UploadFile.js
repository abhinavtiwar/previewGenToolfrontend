import React from 'react'

const UploadFile = () => {
  return (
    <div className="container">
                <div className="row">
                    <form>
                        <h3 > File Upload</h3>
                        <div className="form-group">
                            <input type="file" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
}

export default UploadFile