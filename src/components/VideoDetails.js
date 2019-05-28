import React from 'react'
import ModalVideo from './ModalVideo'
import { VideoPane, Image, VideoTitle, VideoDesc, VideoDetailPane, PublishTitle } from './StyledComponents'

class VideoDetails extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: this.props.data.items,
            flag: this.props.flag,
            pageData: [],
            getPageDataFlag: false
        }
    }

    componentDidMount(){
        if(this.props.flag)
            this.setPageData()
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props)
            this.setPageData()
    }
    
    setPageData = () =>{
        let tempPageData = []
        this.state.flag && this.state.items.map((item) =>{
            let publishedAt = item.snippet.publishedAt.split('T')[0].split('-')
            let monthArr = ['JANUARY', 'FEBUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
            switch(publishedAt[1]){
                case '1':
                    publishedAt[1] = monthArr[0]
                    break
                case '2':
                    publishedAt[1] = monthArr[1]
                    break
                case '3':
                    publishedAt[1] = monthArr[2]
                    break
                case '4':
                    publishedAt[1] = monthArr[3]
                    break   
                case '5':
                    publishedAt[1] = monthArr[4]
                    break
                case '6':
                    publishedAt[1] = monthArr[5]
                    break
                case '7':
                    publishedAt[1] = monthArr[6]
                    break
                case '8':
                    publishedAt[1] = monthArr[7]
                    break                    
                case '9':
                    publishedAt[1] = monthArr[8]
                    break
                case '10':
                    publishedAt[1] = monthArr[9]
                    break
                case '11':
                    publishedAt[1] = monthArr[10]
                    break
                case '12':
                    publishedAt[1] = monthArr[11]
                    break                                         
                default:
                    publishedAt[1] = monthArr[0]
            }            
            
            return tempPageData.push({
                videoID: item.id.videoId || item.id.playlistId,
                title: item.snippet.title,
                description: item.snippet.description,
                imgURL: item.snippet.thumbnails.medium.url || item.snippet.thumbnails.default.url,
                publishedAt: publishedAt,
                channelTitle: item.snippet.channelTitle,
                url: `https://www.youtube.com/embed/${item.id.videoId}`,
                videoViewFlag: false
            })
        })
        this.setState({
            pageData: tempPageData,
            getPageDataFlag: true
        })
    }

    handleVideoView = (videoID) =>{
        let tempPageData = this.state.pageData
        tempPageData.filter(item =>{
            if(item.videoID === videoID){
                item.videoViewFlag = true
            }
            return 'videoViewFlag set'
        })
        this.setState({
            pageData: tempPageData
        })
    }

    render(){
        return(
            this.props.flag && <div>
            {
                this.state.getPageDataFlag && this.state.pageData.map(item =>{
                    return <VideoPane key={item.videoID}>
                        <Image src={item.imgURL} alt={item.title}/>
                        <VideoDetailPane>
                            <VideoTitle>{item.title}</VideoTitle>
                            <VideoDesc>{item.description}</VideoDesc>
                            <ModalVideo videoID={item.videoID} title={item.title}/>
                            <PublishTitle>{item.publishedAt[2]} {item.publishedAt[1]} {item.publishedAt[0]} By {item.channelTitle}</PublishTitle>
                        </VideoDetailPane>
                    </VideoPane>
                })
            }
            </div>
        )
    }
    
}



export default VideoDetails