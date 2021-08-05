const Navigator = () => {
  return ( 
    <nav className="navbar">
      <h1>The Citizen Blog</h1>
      <div className="links">
        <a href="/" style={{
          color: "green",
          backgroundColor: 'yellow',
          borderRadius: '8px',
        }}>Home</a>
        <a href="/create" style={{
          color: "white",
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>New Blog</a>
      </div>
    </nav>
   );
}
 
export default Navigator;