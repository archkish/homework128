import CountUp from "react-countup"

export default function Counters() {
  const arrCounters = [
    {
      end: 15,
      suffix: "+",
      duration: "4",
      title: "Years in Business"
    },
    {
      end: 500,
      suffix: "+",
      duration: "4",
      title: "Happy Clients"
    },
    {
      end: 10,
      suffix: "+",
      duration: "4",
      title: "Photography Awards"
    },
    {
      end: 5,
      suffix: "+",
      prefix: "0",
      duration: "4",
      title: "International Shoots"
    },
    {
      end: 10000,
      suffix: "+",
      separator: ",",
      duration: "2",
      title: "Social Media Followers"
    },
    {
      end: 90,
      suffix: "%",
      duration: "4",
      title: "Client Retention Rate"
    }
  ]
  return (
    <div className="about__numbers">
        <div className="counter-wrapp">
          {arrCounters.map(count => (
            <div className="count-item">
            <div className="count">
              <CountUp 
                  end={count.end} 
                  suffix={count.suffix} 
                  duration={count.duration} 
                  separator={count.separator}
                  prefix={count.prefix}/>
            </div>
            <div className="subtitle">{count.title}</div>
          </div>
          ))}
        </div>
    </div>
  )
}
