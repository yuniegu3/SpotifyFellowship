const AllEvents = (props) => {
let events = props.events.map((event) => {
    return(
      <div key={event.id}>
        <h1>{event.title}</h1>
        <p>{event.content}</p>
        <p>{event.start}</p>
        <p>{event.end}</p>
        <p>{event.date}</p>
      </div>
    )
  })
return(
      <div>
        {fruits}
      </div>
    )
}