export const formData = [
  [ // First group
    {
      id: 1,
      type: "radio_button",
      required: true,
      question: "How are you?",
      answers: ["Fine", "OK", "Great"]
    },
    {
      id: 2,
      type: "checkbox",
      required: true,
      question: "What did you eat?",
      answers: ["Pizza", "Burger", "Soup"]
    },
    {
      id: 3,
      type: "text",
      required: true,
      question: "What do you think?"
    },
    {
      id: 4,
      type: "date",
      required: true,
      question: "What date do you want?"
    },
    {
      id: 5,
      type: "dropdown",
      required: true,
      question: "What do you drop down?",
      answers: ["First", "Second", "Third"]
    }
  ]
]