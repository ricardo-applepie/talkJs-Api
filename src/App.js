import React from 'react';
import Talk from 'talkjs';
import { useEffect } from 'react';
import './App.css';

function App() {
  const talkjsContainer = React.createRef();
  useEffect(() => {
    const currentUser = {
      id: 1,
      name: 'rick',
      email: 'rick@gmail.com',
      photoUrl: 'myusrl',
      welcomeMessage: 'Hey there! How are you? :-)',
      role: 'default',
    };

    Talk.ready.then(() => {
      var me = new Talk.User({
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email,
        photoUrl: currentUser.photo,
        welcomeMessage: 'Hey there! How are you? :-)',
        role: 'default',
      });
      var other = new Talk.User({
        id: '654321',
        name: 'Sebastian',
        email: 'Sebastian@example.com',
        photoUrl: 'https://demo.talkjs.com/img/sebastian.jpg',
        welcomeMessage: 'Hey, how can I help?',
        role: 'default',
      });

      let test = (window.talkSession = new Talk.Session({
        appId: 't7AkyA9y',
        me: me,
      }));

      var conversation = window.talkSession.getOrCreateConversation(
        Talk.oneOnOneId(me, other)
      );

      conversation.setParticipant(me);
      conversation.setParticipant(other);
      console.log(conversation);
      var inbox = window.talkSession.createInbox({ selected: conversation });
      console.log(inbox);

      inbox.mount(talkjsContainer.current);
    });
  }, []);

  return (
    <div className="App">
      <div ref={talkjsContainer}></div>
    </div>
  );
}

export default App;
