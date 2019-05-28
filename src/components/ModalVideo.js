import React from 'react'
import { ViewButton, ModelMain, CloseButton } from './StyledComponents'

class ModalVideo extends React.Component {
    state = { 
      show: false,
      videoID: this.props.videoID,
      url: ''
    }
  
    showModal = () => {
      let tempURL = `https://www.youtube.com/embed/${this.state.videoID}`
      this.setState({
        url: tempURL,
        show: true
      })
    }
    
    hideModal = () => {
      this.setState({ show: false });
    }

    render() {
      return (
        <main>
          <Modal show={this.state.show} handleClose={this.hideModal} >
          <iframe width="420" height="315" src={this.state.url} title={this.props.title} frameBorder="0" allowFullScreen></iframe>
          </Modal>
          <ViewButton type='button' onClick={this.showModal}>View</ViewButton>
        </main>
      )
    }
  }
  
  const Modal = ({ handleClose, show, children }) => {
    let blockNone = 'none'
    if(show) blockNone = 'block'
    const styleDisplay = {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.6)',
      display: blockNone
    } 
    return (
      <div style={styleDisplay}>
        <ModelMain>
          {children}
          <CloseButton onClick={handleClose}>X</CloseButton>
        </ModelMain>
      </div>
    );
  };
  
  
  export default ModalVideo;