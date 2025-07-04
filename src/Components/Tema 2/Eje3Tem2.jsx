import "./Eje3Tem2.css"
// Nivel 6 - Aparece en varios lugares
function AuthorInfo({ name }) {
  return (
    <div className="author">
      Autor: {name}
    </div>
  );
}

// Nivel 5
function Comment({ text, author }) {
  return (
    <div className="comment">
      <p>{text}</p>
      <AuthorInfo name={author} />
    </div>
  );
}

// Nivel 4
function CommentSection({ comments }) {
  return (
    <div className="secciondecomentarios">
      <h4>Comentarios:</h4>
      {comments.map((c, index) => (
        <Comment key={index} text={c.text} author={c.author} />
      ))}
    </div>
  );
}

// Nivel 3
function PostFooter({ comments }) {
  return (
    <div className="postfooter">
      <CommentSection comments={comments} />
    </div>
  );
}

// Nivel 3
function PostContent({ content, author }) {
  return (
    <div className="PostContent">
      <p>{content}</p>
      <AuthorInfo name={author} />
    </div>
  );
}

// Nivel 3
function PostHeader({ title, author }) {
  return (
    <div className="PostHeader">
      <h2>{title}</h2>
      <AuthorInfo name={author} />
    </div>
  );
}

// Nivel 2
function BlogPost({ title, content, author, comments }) {
  return (
    <div className="BlogPost">
      <PostHeader title={title} author={author} />
      <PostContent content={content} author={author} />
      <PostFooter comments={comments} />
    </div>
  );
}

// Nivel 1
function Eje3Tem2() {
  const posts = [
    {
      title: "Mi primer post",
      content: "Este es el contenido del primer post.",
      author: "Juan",
      comments: [
        { text: "¡Buen trabajo!", author: "Ana" },
        { text: "Muy interesante", author: "Luis" },
      ],
    },
    {
      title: "Aprendiendo React",
      content: "React es una biblioteca genial para interfaces.",
      author: "Pedro",
      comments: [
        { text: "¡Gracias por compartir!", author: "Clara" },
      ],
    },
  ];

  return (
    <div>
      <h2>Ejercicio 2.3</h2>
      {posts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
    </div>
      
  );
}

export default Eje3Tem2