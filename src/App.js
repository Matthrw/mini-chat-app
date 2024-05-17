import { useState } from 'react';

const initialItems = [
  {
    id: 647747,
    username: 'amyrobson',
    image: 'https://i.pravatar.cc/48?u=118836',
    content: 'first comment',
  },
  {
    id: 565567,
    username: 'opeyemi',
    image: 'https://i.pravatar.cc/48?u=499476',
    content: 'second comment',
  },
];

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default function App() {
  const [replys, setReplys] = useState(initialItems);
  const [showReplyTab, setShowReplyTab] = useState(false);

  function handleAddChats(chat) {
    setReplys((replys) => [...replys, chat]);
  }

  return (
    <div>
      <ReplyList replys={replys} setShowReplyTab={setShowReplyTab} />
      {showReplyTab && <AddReply onAddChats={handleAddChats} />}
    </div>
  );
}

function ReplyList({ replys, setShowReplyTab }) {
  return (
    <ul>
      {replys.map((reply) => (
        <Reply reply={reply} key={reply.id} setShowReplyTab={setShowReplyTab} />
      ))}
    </ul>
  );
}

function Reply({ reply, setShowReplyTab }) {
  function handleAddChats() {
    setShowReplyTab((show) => !show);
  }
  return (
    <li>
      <img src={reply.image} alt={reply.name} />
      <h1>{reply.username}</h1>
      <p>{reply.content}</p>
      <Button onClick={handleAddChats}>Reply</Button>
    </li>
  );
}

function AddReply({ onAddChats }) {
  const [username, setUserName] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  function handleSubmit(e) {
    e.preventDefault();
    if (!username || !content || !image) return;
    const id = crypto.randomUUID();
    const newReply = {
      id,
      username,
      image: `${image}?=${id}`,
      content,
    };
    onAddChats(newReply);
    console.log(newReply);
    setUserName('');
    setImage('https://i.pravatar.cc/48');
    setContent('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>image</label>
      <input
        type='text'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <label>username</label>
      <input
        type='text'
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label>content</label>
      <textarea
        type='text'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button>submit</Button>
    </form>
  );
}
