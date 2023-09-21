import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PostType from '../types/post'



type ContactUsProps = {
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
    newMessage: Partial<PostType>
    isLoggedIn: boolean
}

export default function ContactUs({ handleChange, newMessage, isLoggedIn }: ContactUsProps) {
  return (
    <Form className="contact-us-body">
      <div className='contact-us-spacing'>
        <h4 className='text-center'>Contact Us</h4>
        <Form.Label>Name</Form.Label>
        <Form.Control name='title' onChange={handleChange} value={newMessage.title} placeholder='Enter Title'/>
        <Form.Label>Email</Form.Label>
        <Form.Control name='body' onChange={handleChange} value={newMessage.body} placeholder='Enter Body'/>
        <Form.Label>Message</Form.Label>
        <Form.Control name='message' onChange={handleChange} as='textarea' value={newMessage.message} placeholder='Enter Message'/>
        <Button className='mt-3 w-100' variant='warning' type ='submit' disabled={!isLoggedIn}>Submit</Button>
      </div>
    </Form>
  )
}