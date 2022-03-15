import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title , description , imgUrl , newsUrl , author , date , source} = this.props;
        return (
            <div>
                <div className="card"style={{border : '2px solid' , borderColor:'white',backgroundColor:'#f0e68c'}} >
                    <span className="badge bg-danger">{source}</span>
                    <img src={!imgUrl ? "https://image.cnbcfm.com/api/v1/image/107028292-1646916886300-gettyimages-102728547-10548874.jpeg?v=1646916965":imgUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {!author ? "unknown":author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
