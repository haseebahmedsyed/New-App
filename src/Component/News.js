import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroller'

export class News extends Component {



    constructor(props){
        // console.log("I am 1 cons")
        super(props);
        // console.log("I am 2 cons")
        this.state={
            article : [],
            page : 1,
            loading : false,
            total:0
        }
        document.title = `${this.props.category} - NewsMonkey`;
    }

    // async updateNews(){
    //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=be8627d7ca274667aed4b8b0896c8fe3&page=${this.state.page}&pageSize=${this.props.pageSize}`
    //   this.setState({loading:true})
    //   let data = await fetch(url)
    //   let parsed = await data.json()
    //   console.log(parsed)
    //   this.setState({article : parsed.articles, total:parsed.totalResults,loading:false})
    // }

    async componentDidMount(){
      // console.log("I am 3 cons")
      // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=be8627d7ca274667aed4b8b0896c8fe3&page=1&pageSize=${this.props.pageSize}`
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
      this.props.changeProgress(50)
      this.setState({loading:true})
      let data = await fetch(url)
      let parsed = await data.json()
      this.props.changeProgress(70)
      console.log(parsed)
      this.setState({article : parsed.articles, total:parsed.totalResults,loading:false})
      this.props.changeProgress(100)
      // this.setState({page : 1});
      // this.updateNews();
    }

    handlePrevClick = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}3&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
      this.props.changeProgress(50)
      this.setState({loading:true})
      let data = await fetch(url)
      let parsed = await data.json()
      this.props.changeProgress(70)
      console.log(parsed)
      this.setState({article : parsed.articles, total:parsed.totalResults,loading:false,page:this.state.page-1})
      this.props.changeProgress(100)
      
      // this.setState({page:this.state.page-1});
      // this.updateNews();
    }
    handleNextClick = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      this.props.changeProgress(50)
      this.setState({loading:true})
      let data = await fetch(url)
      let parsed = await data.json()
      this.props.changeProgress(70)
      console.log(parsed)
      this.setState({article : parsed.articles, total:parsed.totalResults,loading:false ,page:this.state.page+1})
      this.props.changeProgress(100)
      
      // this.setState({page:this.state.page+1});
      // this.updateNews();
    }
    
    // async fetchData(){
    //   this.setState({page:this.state.page+1})
    //   // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=2`
    //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}`
    //   this.setState({loading:true})
    //   let data = await fetch(url)
    //   let parsed = await data.json()
    //   // this.setState({article : this.state.article.concat(parsed.article)})
    //   this.setState({article : this.state.article.concat(parsed.articles), total:parsed.totalResults,loading:false })

    // }

     

  render() {
    // console.log("I am 4 cons")
    return (

        <div className='container my-5'>
          <h1 className="text-center">BREAKING NEWS !!! from {this.props.category}</h1>
          <div className="text-center">{this.state.loading && <Spinner/> }</div>

          <div className="row my-4">

            {this.state.article.map((element)=>{
              return  <div className="col-md-4 my-2" key={element.url}>
                        <NewsItem title = {element.title} description = {element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                      </div>
            })}

          </div>
          {/* <InfiniteScroll
            // pageStart={this.state.page}
            dataLength = {this.state.article.length}
            loadMore = {this.fetchData}
            hasMore = {this.state.article.length !== this.state.total}
            // hasMore = {true}
            loader ={<Spinner/>}
            >



          </InfiniteScroll> */}

          <div className="container d-flex justify-content-between ">
            <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevClick} className="btn btn-dark">Previous</button>
            <button type="button" disabled = {this.state.page>= Math.ceil((this.state.total/this.props.pageSize))} onClick={this.handleNextClick} className="btn btn-dark">Next</button>
          </div>
        </div>

      


    )
  }
}

export default News
