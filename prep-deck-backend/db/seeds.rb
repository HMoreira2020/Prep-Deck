# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Question.destroy_all 
Deck.destroy_all 


Question.create!(
    [
        {
            content: "Which of the following is a JavaScript data type?" ,
            choice_a: "null",
            choice_b: "undefined",
            choice_c: "object",
            choice_d: "All of the above",
            correct_answer: "D",
            topic: "Javascript Fundamentals"
        },
        {
            content: "What will be the output of the following code ?" ,
            content_2: "console.log( typeof('5' + 5))",
            choice_a: "number",
            choice_b: "string",
            choice_c: "object",
            choice_d: "null",
            correct_answer: "B",
            topic: "Javascript Fundamentals"
        },
        {
            content: "What will be the output of the following code ?" ,
            content_2: "var package;
            console.log('Package: ' + package)
            console.log('Amount: ' + amount);",
            choice_a: "Package: null; Amount: null",
            choice_b: "Package: undefined; Amount: undefined",
            choice_c: "Package: null; A ReferenceError is thrown saying amount is not defined",
            choice_d: "Package: undefined; A ReferenceError is thrown saying amount is not defined",
            correct_answer: "D",
            topic: "Javascript Fundamentals"
        },
        {
            content:"What will be the output of the following code ?" ,
            content_2: "var i=true; var j=false; var k=true;
            if( i || J && K){
            a=10;
            b='True';
            }
            else {
            a=20;
            b='False';
            }
            console.log(a+','+b);",
            choice_a: "10,True",
            choice_b: "10,False",
            choice_c: "20,True",
            choice_d: "20,False",
            correct_answer: "A",
            topic: "Javascript Fundamentals" 
        },
        {
            content:"The statement is an example of:" ,
            content_2: "while (3==3) {}",
            choice_a: "A typographical error",
            choice_b: "An infinite loop",
            choice_c: "An illegal JavaScript statement",
            choice_d: "None of the above",
            correct_answer: "B",
            topic: "Javascript Fundamentals"
        },
        {
            content:"Which of the following is a syntactically correct for loop?" ,
            choice_a: "for (i<=10;i++)",
            choice_b: "for i=1 to 10",
            choice_c: "for (i=0; i<=10; i++)",
            choice_d: "for (i=0;i<=10)",
            correct_answer: "C",
            topic: "Javascript Fundamentals"
        },
        {
            content:"What are the three important manipulations done in a for loop on a loop variable?" ,
            choice_a: " Initialization, Testing, Incrementation",
            choice_b: "Updation, Incrementation, Initialization",
            choice_c: "Initialization, Testing, Updation",
            choice_d: "Testing, Updation, Testing",
            correct_answer: "C",
            explanation: " In a for loop, the initialization, the test, and the update are the three crucial manipulations of a loop variable. Firstly the loop initializes the variable then tests the condition and then after executing the statement increments its value.",
            topic: "Javascript Fundamentals" 
        },
        {
            content:"What will the following JavaScript code snippet do? If not, what will be the error?" ,
            content_2: "function letsfindcourse(lfc) { 
                for (; lfc.next; lfc = lfc.next) ; 
                return lfc; 
                }",
            choice_a: "No, this will result in a runtime error with the message 'Cannot use Linked List'",
            choice_b: "No, this will not iterate",
            choice_c: "Yes, this will work",
            choice_d: "No, this will throw an exception as only numerics can be used in a for loop",
            correct_answer: "C",
            explanation: "The above code uses a for loop to traverse a linked list data structure and return the last object in the list. This will work.",
            topic: "Javascript Fundamentals" 
        },
        {
            content:"What will be the output of the following JavaScript code?" ,
            content_2: "let x=0;
            for(x; x<10; x++);
            console.log(x);",
            choice_a: "0",
            choice_b: "9",
            choice_c: "10",
            choice_d: "error",
            correct_answer: "C",
            explanation: "The value of the x will increase until it becomes equal to 10, after which the cursor comes out of the loop. There are no statements for the loop so only the value of one will increase. Therefore the output will be 10.",
            topic: "Javascript Fundamentals" 
        },
        {
            content:"1. Which operator is known as the equality operator, which checks whether its two operands are 'equal'?" ,
            choice_a: "=",
            choice_b: "==",
            choice_c: "===",
            choice_d: "&&",
            correct_answer: "B",
            explanation: "Confirms that two operands are equal value, but performs a type conversion beforehand.",
            topic: "Javascript Expressions and Operators" 
        },
        {
            content:"Which operator is known as the strict equality operator, which checks whether its two operands are identical or not?" ,
            choice_a: "=",
            choice_b: "==",
            choice_c: "===",
            choice_d: "&&",
            correct_answer: "C",
            explanation: "Confirms that the two operands are also of equal type and value without doing a type conversion beforehand",
            topic: "Javascript Expressions and Operators"
        },
        {
            content:"Which operator will return false if two value are equal?" ,
            choice_a: "!",
            choice_b: "!=",
            choice_c: "!==",
            choice_d: "All of the above",
            correct_answer: "B",
            topic: "Javascript Expressions and Operators" 
        },
        {
            content:" If var A={B:3, C:5}, how do you delete one of the properties of an object?" ,
            choice_a: "delete",
            choice_b: "delete A",
            choice_c: "delete A.B",
            choice_d: "delete A[0]",
            correct_answer: "C",
            topic: "Javascript Expressions and Operators"
        }
    ]
)

questions = Question.all
deck = Deck.new(name: "Main")
deck.user = User.find(1)
deck.questions = questions
deck.save 
p "Created #{Question.count} movies"



