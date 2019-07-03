import React from "react";
import ChatListComponent from "../chat-list/chatList";
import chatList from "../chat-list/chatList";

const firebase = require("firebase");

class DashboardComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedChat: null, // index of chat currently on
      newCHAtFormVisible: false, // form we have to create a new chat
      email: null, // email current user logged in
      chats: []
    };
  }

  render() {
    /*when new chat is clicked
-  show new chat form
- what ever chat we are currently in, we want to navigate away from it */
    return (
      <div>
        <div>hello from Dashboard</div>
        <ChatListComponent
          history={this.props.history}
          newChatBtnFn={this.newChatBtnClicked}
          selectChatFn={this.selectChat}
          chats={this.state.chats}
          userEmail={this.state.userEmail}
          selectedChatIndex={this.state.selectedChat}
        />
      </div>
    );
  }

  selectChat = chatIndex => {
    console.log("selected a chat", chatIndex);
  };

  newChatBtnClicked = () => {
    // func of dashboard component that we pass in to the chatlist component
    this.setState({ newCHAtFormVisible: true, selectChat: null });
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(async _user => {
      if (!_user) this.props.history.push("/login");
      else {
        await firebase
          .firestore()
          .collection("chats")
          .where("users", "array-contains", _user.email)
          .onSnapshot(async res => {
            const chats = res.docs.map(_doc => _doc.data);
            await this.setState({
              email: _user.email,
              chats: chats
            });
            console.log(this.state);
          });
      }
    }); // func from firebase. whnever a offstate state changes what ever is insid will change
  };
}

export default DashboardComponent;
