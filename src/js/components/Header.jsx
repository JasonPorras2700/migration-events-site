export const Header = () => {
    return (
    <>
      <header id="header" className="header">
        <a href="./account.html" id="my-account">My account </a>
        <div id="tabs" className="header__tabs">
            <button data-category="music">Music</button>
            <button data-category="sport">Sport</button>
            <button data-category="business">Business</button>
            <button data-category="food">Food</button>
            <button data-category="art">Art</button>
        </div>
      </header>
    </>
    )
  }
  
 