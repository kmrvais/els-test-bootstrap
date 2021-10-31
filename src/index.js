import "./styles.scss";
import {feedbackForm} from './components/feedback-form/feedback-form'

document.addEventListener('DOMContentLoaded', function(){
  const form = document.querySelector('#feedback-form')
  feedbackForm(form)
})
