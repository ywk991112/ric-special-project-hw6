var database = {
  datas: [{id: 0, name: 'Elsa', conversationList:[{from_me: true, message: 'qqq', time: '00:00am'},{from_me: true, message: 'qqqwww', time: '00:20am'}, {from_me: false, message: 'qw', time:'00:24am'}]},
          {id: 1, name: 'Mary', conversationList:[{from_me: false, message: '八拉拉安', time: '12:05pm'},{from_me: true, message: 'qqqwww', time: '1:20pm'}, {from_me: true, message: '拉拉', time:'2:24pm'}]},
          {id: 2, name: 'Gay', conversationList:[{from_me: false, message: '安安', time: '12:05pm'},{from_me: true, message: 'qqqwww', time: '1:20pm'}, {from_me: true, message: 'gg', time:'2:24pm'}]}
  ],
  id_r: 0,   
  thread_id:[0,1,2],
  text:''
}

export default database;
