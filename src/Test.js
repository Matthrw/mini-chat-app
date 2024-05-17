import { useState } from 'react';

export default function App() {
  const [replyContents, setReplyContents] = useState([
    {
      image: 'https://i.pravatar.cc/48?u=499476',
      username: 'opeyemi',
      content: 'my name is matthew',
    },
  ]);

  return (
    <div className='container'>
      <ReplyBox replyContents={replyContents} />
    </div>
  );
}

function ReplyBox({ replyContents }) {
  return (
    <div>
      {replyContents.map((replyContent, index) => (
        <div key={index}>
          <img src={replyContent.image} alt={replyContent.username} />
          <p>{replyContent.username}</p>
          <p>{replyContent.content}</p>
        </div>
      ))}
    </div>
  );
}
