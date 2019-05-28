import React from 'react';
import { Heading, PaneBoundary, SearchPane, SearchBox, SearchButton, TotalResults, PageNavigation, PrevNextButton, PageNumbers } from './components/StyledComponents';
import VideoDetails from './components/VideoDetails'
import MyKey from './keys'

//Pleaes make sure you have a YouTube API_KEY

class App extends React.Component {  
  constructor(props){
    super(props)
    this.state = {
      text: '',
      data: [],
      flag: false,
      currentPageNo: 1,
      totalPages: 1,
      myKey: MyKey.youTubeID
    }
  }  

  handleTextChange = (event) =>{
    this.setState({
        text: event.target.value
    })

  }

  handleSearchButton = async () =>{
    if(this.state.text.length > 2){
      let queryString = encodeURIComponent(this.state.text)
      let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${queryString}&key=${this.state.myKey}`
      this.fetchData(url)
      this.setState({
        currentPageNo: 1
      })
    
    }
  }

  fetchData = (url) =>{
    if(this.state.text.length > 2 && this.state.flag){
      this.setState({
        flag: false
      })
    }
    const xhr = new XMLHttpRequest()
    xhr.onload = () =>{
      if (xhr.status !== 200) {
        console.log('Error getting data: ' + xhr.status);
        return;
      }
      let responseObj = xhr.response;
      this.setState({
        data: responseObj,
        flag: true,
        nextPageToken: responseObj.nextPageToken || '',
        prevPageToken: responseObj.prevPageToken || '',
        totalResults: responseObj.pageInfo.totalResults || 0
      })
    }
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.send()
    xhr.onerror = () =>{
      // handle non-HTTP error
      console.log("Apologies, network is down. Try after sometime")
    }
    
  }

  handleNextButton = () =>{
    let queryString = encodeURIComponent(this.state.text)
    let nextPageToken = this.state.nextPageToken
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&pageToken=${nextPageToken}&q=${queryString}&key=${this.state.myKey}`
    this.fetchData(url)
    this.setState({
      currentPageNo: this.state.currentPageNo + 1
    })
  }

  handlePrevButton = () =>{
    let queryString = encodeURIComponent(this.state.text)
    let prevPageToken = this.state.prevPageToken
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&pageToken=${prevPageToken}&q=${queryString}&key=${this.state.myKey}`
    this.fetchData(url)
    if(this.state.currentPageNo >= 2){
      this.setState({
        currentPageNo: this.state.currentPageNo - 1
      })
    }
  }

  render(){
    return (
        <div>
          <Heading>YouTube Search Videos</Heading>
          <PaneBoundary>
            <SearchPane>
              <SearchBox type="text" onChange={this.handleTextChange} />
              <SearchButton onClick={this.handleSearchButton}>SEARCH</SearchButton>
            </SearchPane> 
            <TotalResults>Total Results: {this.state.totalResults}</TotalResults>
            <PageNavigation>
              <PrevNextButton onClick={this.handlePrevButton}>{'<'}</PrevNextButton>
              <PageNumbers>
                {this.state.currentPageNo} / {
                  this.state.totalResults > 1 ? Math.ceil(this.state.totalResults/5) : 1
                }
              </PageNumbers>
              <PrevNextButton onClick={this.handleNextButton}>{'>'}</PrevNextButton>
            </PageNavigation>
          
            {
              this.state.flag && <VideoDetails data={this.state.data} flag={this.state.flag}/>
            }
          </PaneBoundary>
        </div>
    );
  }
}

export default App;
