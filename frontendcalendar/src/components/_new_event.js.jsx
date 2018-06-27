const NewEvent = (props) => {
  let formFields = {}
 
  return(
    <div>
     <input ref={input => formFields.title = input} placeholder='Enter the event title'/>
     <input ref={input => formFields.content = input} placeholder='Enter the content' />
     <input ref={input => formFields.start = input} placeholder='Enter the start time' />
     <input ref={input => formFields.end = input} placeholder='Enter the end time' />
     <input ref={input => formFields.date = input} placeholder='Enter the date' />
     <button>Submit</button>
      </div>
    )
}