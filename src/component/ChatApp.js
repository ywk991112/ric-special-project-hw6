import React, { Component, PropTypes } from 'react';
import ThreadItem from './ThreadItem.js';
import MessageItem from './MessageItem.js';

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [{id: 0, name: 'Elsa', conversationList:[{from_me: true, message: 'qqq', time: '00:00am'},{from_me: true, message: 'qqqwww', time: '00:20am'}, {from_me: false, message: 'qw', time:'00:24am'}]},
              {id: 1, name: 'Mary', conversationList:[{from_me: false, message: '八拉拉安', time: '12:05pm'},{from_me: true, message: 'qqqwww', time: '1:20pm'}, {from_me: true, message: '拉拉', time:'2:24pm'}]},
              {id: 2, name: 'Gay', conversationList:[{from_me: false, message: '安安', time: '12:05pm'},{from_me: true, message: 'qqqwww', time: '1:20pm'}, {from_me: true, message: 'gg', time:'2:24pm'}]}
      ],
      id_r: 0,   
      thread_id:[0,1,2],
      text:''
    }
    
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.threadList = this.threadList.bind(this);
    this.changeRecent = this.changeRecent.bind(this);
  }
  
  onChange(e) {
    this.setState({text: e.target.value});
  }
  
  handleSubmit(e) {
    // add conversation to datas
    var conList = this.state.datas[this.state.id_r].conversationList;
    conList = conList.concat([{from_me:true, message: this.state.text}]);
    var datas = this.state.datas;
    datas[this.state.id_r].conversationList = conList;
    this.setState({datas: datas});
    
    // rearrange thread order
    if(id_r !== thread_id[0]) {
      var index = thread_id.indexOf(id_r);
      if(index > -1)
        thread_id.splice(index, 1);
      thread_id = [id_r].concat(thread_id);
    }
  }
  
   
  changeRecent(e) {
    console.log(this.state.id_r);
  }
  
  threadList() {
    console.log('qqqq');
    var createList = function(data){
      var Ncon = data.conversationList.length;
      var lastMessage = data.conversationList[Ncon - 1];
      console.log(lastMessage);
      console.log(this.state.id_r);
      return <ThreadItem id={data.id} name={data.name} message_r={lastMessage.message} time_r={lastMessage.time} onClick={()=> {
          this.setState({id_r: data.id});
        }}/>;
    }
    return(this.state.datas.map(createList, this));
  } 
  
  render() {
    // html -> jsx
    return (
 <div className="chat-app clearfix">
  <div className="chat-app_left">
    <div className="heading">
      <h3 className="messenger-title">Messager</h3>
    </div>
    <div className="thread-list">
      {this.threadList()}       
    </div>
  </div>
  <div className="chat-app_right">
    <div className="heading">
      <div className="current-target">{this.state.datas[this.state.id_r].name}</div>
    </div>
    <div className="message-list">
      <MessageItem conversationList={this.state.datas[this.state.id_r].conversationList}/>
    </div>
    <div className="footer">
      <form onSubmit={this.handleSubmit} >
        <input className="new-message" type="text" onChange={this.onChange} value={this.state.text}/>
      </form>
    </div>
  </div>
</div>
    );
  }
}

export default ChatApp;
