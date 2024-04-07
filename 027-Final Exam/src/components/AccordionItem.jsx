
export default function AccordionItem({question, answer, active, setActive}) {
  
  const handleClick = () => {
    setActive(active === question ? '' : question);
  };

  return (
    <div className="accordion-content">
      <div className="question">
        <div className="title">{question}</div>
        <button className="btn" onClick={handleClick}><span className={active === question ? "up" : "down"}></span></button>
      </div>
      <div className={(active === question ? 'show' : "") + " answer" }>
        {answer}
      </div>
    </div>
  )
}