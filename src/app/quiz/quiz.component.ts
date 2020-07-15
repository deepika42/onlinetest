import { Component, OnInit ,ViewEncapsulation} from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Question } from './question'
import { User } from '../shared/user.service'

@Component({
  selector: 'app-quiz',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  isVisibleButton = false
  closeResult: string
  noOfQuestions: number
  selectedlanguage: Question[] = []
  question: string
  selectedvalue: string
  option: any[]
  questions: any[]
  i: number = 0
  languages: string[] = ["Java"]
  
  allQuestions:any[]=[]

attemptQuiz(){
  this.isVisibleButton = !this.isVisibleButton

  //load questions from database
  this.ud.loadQuestions().subscribe(response =>{
    for(let r in response){
      this.allQuestions.push(response[r])
    }
    console.log(this.allQuestions)
  })
}

selectLanguage() {
  this.questions =  this.allQuestions.filter(d => (d.topic == this.selectedvalue))
  this.question = this.questions[0].question
  this.option = this.questions[0].answerList
  this.i = 0
  this.noOfQuestions = this.questions.length
  }


proceed() {
  ++this.i
  this.question = this.questions[this.i].question
  this.option = this.questions[this.i].answerList
}
  
answerkey: AnswerKey[] = []
totalQuestions: number = 0
submitAnswer(e:any, str: string, answer: string) {
  if (e.target.checked) {
    console.log(str)
    this.totalQuestions++
    this.answerkey.push(new AnswerKey(str, answer))
  }
  else {

    this.answerkey.splice(0, 1)
  }
  
  console.log(this.answerkey)
  this.checkAnswer()
}

checkAnswer() {
  var result1 = this.allQuestions
  var result2 = this.answerkey

  var props = ['id', 'answer']

  var result = result1.filter(function (ob1) {
    return result2.some(function (ob2) {
      return ob1.answer === ob2.answer
    })

  }).map(function (obj) {
    return props.reduce(function (newObj, ans) {
      newObj[ans] = obj[ans]
      return newObj
    }, {})
  });
}

score: number = 0;
getResult(viewResult) {
  this.isVisibleButton = !this.isVisibleButton
  for (var i = 0; i < this.answerkey.length; i++) {
    if (this.answerkey[i].selected == this.allQuestions[i].answer) 
    this.score++
  }

  console.log(this.score)
  console.log(this.totalQuestions)
  this.modalService.open(viewResult, { centered: true })
}

closeModal(){
  this.modalService.dismissAll('ok')
  alert("Please refresh this page to start the test again")
}

constructor(private modalService: NgbModal , private ud:User) { }

  ngOnInit(): void {
  }

}

export class AnswerKey {
  selected: string
  answer: string
  constructor(selected: string, answer: string) {
    this.selected = selected
    this.answer = answer
  }

}
