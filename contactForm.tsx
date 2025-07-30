import submitForm from './submitForm';

export default function App() {
  return (
    <form
      action='https://questions.greatfrontend.com/api/questions/contact-form'
      method='POST'
      onSubmit={submitForm}
      className='form'>
      <div className='form-input'>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' id='name' />
      </div>
      <div className='form-input'>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
      </div>
      <div className='form-input'>
        <label htmlFor='message'>Message</label>
        <textarea type='text' name='message' id='message' />
      </div>
      <button type='submit'>Send</button>
    </form>
  );
}
