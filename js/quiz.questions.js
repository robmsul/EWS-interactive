// QUIZ
console.log('quiz questions loaded')

$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'Which of the following locations hosted its first ever EWS round in 2018?',
      'options': [
        'Lo Barnechea, Chile',
        'Zona-Zero-Sobrarbe, Spain',
        'Manizales, Colombia'
      ],
      'correctIndex': 2,
      'correctResponse': 'Great job! EWS – Alcadia De Manizales – Mas Oportunidades in Columbia was a new EWS venue and also held the first ever urban EWS stage.',
      'incorrectResponse': 'Nope. EWS – Alcadia De Manizales – Mas Oportunidades in Columbia was a new EWS venue and also held the first ever urban EWS stage'
    },
    {
      'q': 'Who was the first ever male rider to win all stages in an EWS round?',
      'options': [
        'Richie Rude',
        'Sam Hill',
        'Martin Maes'
      ],
      'correctIndex': 0,
      'correctResponse': 'Correct! At Round 8 in the 2018 EWS, Richie won every stage, an unprecedented feat for men.',
      'incorrectResponse': 'Wrong. At Round 8 in the 2018 EWS, Richie Rude became the first male rider to win every stage in an EWS round.'
    },
    {
      'q': 'Which rider has completed a perfect season, winning every round in the series?',
      'options': [
        'Richie Rude',
        'Cecile Ravanel',
        'Both Richie and Cecile'
      ],
      'correctIndex': 1,
      'correctResponse': 'Yes! Cecile is the only rider to have a perfect season and she did it in 2018!',
      'incorrectResponse': 'Incorrect. Although Richie has won the EWS, Cecile Ravanel is the only rider to have a perfect season and she did it in 2018!'
    },
    {
      'q': 'Martin Maes dropped out of the Overall Top 3 men due to which of the following?',
      'options': [
        'Broken hand',
        'Flat rear tire',
        'Wreck'
      ],
      'correctIndex': 0,
      'correctResponse': 'Correct. Unfortunately Martin hit a tree on stage 1 of round 8, breaking his hand and falling from 2nd to 4th. ',
      'incorrectResponse': 'Incorrect. Unfortunately Martin Maes fell from 2nd to 4th after breaking his hand on stage 1 of round 8.'
    }
  ]
  });