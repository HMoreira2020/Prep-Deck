# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Question.destroy_all 

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
            content_2: "var package; console.log('Package: ' + package) console.log('Amount: ' + amount);",
            choice_a: "Package: null; Amount: null",
            choice_b: "Package: undefined; Amount: undefined",
            choice_c: "Package: null; A ReferenceError is thrown saying amount is not defined",
            choice_d: "Package: undefined; A ReferenceError is thrown saying amount is not defined",
            correct_answer: "D",
            topic: "Javascript Fundamentals"
        },
        {
            content:"What will be the output of the following code ?" ,
            content_2: "var i=true; var j=false; var k=true; if( i || J && K){a=10;b='True';} else {a=20; b='False';} console.log(a+','+b);",
            choice_a: "10,True",
            choice_b: "10,False",
            choice_c: "20,True",
            choice_d: "20,False",
            correct_answer: "A",
            topic: "Javascript Fundamentals" 
        },
        {
            content:"The following statement is an example of:" ,
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
            content_2: "function letsfindcourse(lfc) { for (; lfc.next; lfc = lfc.next) ; return lfc; }",
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
            content_2: "let x=0; for(x; x<10; x++); console.log(x);",
            choice_a: "0",
            choice_b: "9",
            choice_c: "10",
            choice_d: "error",
            correct_answer: "C",
            explanation: "The value of the x will increase until it becomes equal to 10, after which the cursor comes out of the loop. There are no statements for the loop so only the value of one will increase. Therefore the output will be 10.",
            topic: "Javascript Fundamentals" 
        },
        {
            content:"Which operator is known as the equality operator, which checks whether its two operands are 'equal'?" ,
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
        },
        {
            content: "Which operator evaluates its operands, then discards the value and returns undefined?" ,
            choice_a: "In",
            choice_b: "Comparison",
            choice_c: "Eval",
            choice_d: "Void",
            correct_answer: "D",
            explanation: "Void is the operator which evaluates its operands, then discards the value and returns undefined.",
            topic: "Javascript Expressions and Operators"
        },
        {
            content: "If an operator is NaN or converts to NaN, what wil comparison operator always returns ?" ,
            choice_a: "True",
            choice_b: "False",
            choice_c: "Undefined",
            choice_d: "NaN",
            correct_answer: "B",
            explanation: "If an operator is NaN or converts to NaN, the comparison operator always returns False.",
            topic: "Javascript Expressions and Operators"
        },
        {
            content: "Which of the following type of variable is visible everywhere in your JavaScript code?" ,
            choice_a: "global variable",
            choice_b: "local variable",
            choice_c: "Both of the above.",
            choice_d: "None of the above.",
            correct_answer: "A",
            explanation: "Global Variables: A global variable has global scope which means it is visible everywhere in your JavaScript code.",
            topic: "Javascript Fundamentals"
        },
        {
            content: "Which built-in method calls a function for each element in the array?" ,
            choice_a: "while()",
            choice_b: "loop()",
            choice_c: "forEach()",
            choice_d: "None of the above.",
            correct_answer: "C",
            topic: "Javascript Fundamentals" 
        },
        {
            content:"Which built-in method returns the calling string value converted to upper case?" ,
            choice_a: "toUpper()",
            choice_b: "changeCase(case)",
            choice_c: "toUpperCase()",
            choice_d: "None of the above",
            correct_answer: "C",
            topic: "Javascript Fundamentals"
        },
        {
            content:"Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?" ,
            choice_a: "charAt()",
            choice_b: "charCodeAt()",
            choice_c: "concat()",
            choice_d: "indexOf()",
            correct_answer: "B",
            topic: "Javascript Fundamentals"
        },
        {
            content:"Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?" ,
            choice_a: "slice()",
            choice_b: "split()",
            choice_c: "substr()",
            choice_d: "search()",
            correct_answer: "C",
            topic: "Javascript Fundamentals" 
        },
        {
            content:"Which of the following function of Array object returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found?" ,
            choice_a: "indexOf()",
            choice_b: "join()",
            choice_c: "lastIndexOf()",
            choice_d: "map()",
            correct_answer: "C",
            topic: "Javascript Fundamentals" 
        },
        {
            content:"Which of the following function of Array object applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value?" ,
            choice_a: "pop()",
            choice_b: "push()",
            choice_c: "reduce()",
            choice_d: "reduceRight()",
            correct_answer: "D",
            explanation: "reduceRight() − Applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.",
            topic: "Javascript Fundamentals" 
        },
        {
            content:"If we created an instance of Tree and stored it as the variable oak, how would we access the type property?" ,
            choice_a: "oak('type')",
            choice_b: "oak.properties('type')",
            choice_c: "oak.key('type')",
            choice_d: "oak.type",
            correct_answer: "D",
            explanation: "oak.type or oak['type'] are two ways you can access the type property.",
            topic: "Javascript Object Orientation" 
        },
        {
            content:"The constructor within Example class assigns a variable _text to whatever is passed in when a new Example is created." ,
            content_2: "If we wanted to create a getter method called text() to access this property, how would we write it?",
            choice_a: "text() { return this._text }",
            choice_b: "text = () => { return this._text }",
            choice_c: "get text() { return this._text }",
            choice_d: "text = () => this._text",
            correct_answer: "C",
            topic: "Javascript Object Orientation" 
        },
        {
            content: "AJAX refers to:" ,
            choice_a: "another name for fetch().",
            choice_b: "a particular method form the jquery library",
            choice_c: "a technique used for sending and receiving data on the web without a page refresh.",
            choice_d: "a way to render HTML pages.",
            correct_answer: "C",
            topic: "Server Communication" 
        },
        {
            content: "Which of the following technologies is NOT involved in using AJAX?" ,
            choice_a: "JSON",
            choice_b: "the Javascript event loop",
            choice_c: "CSS",
            choice_d: "Promises",
            correct_answer: "C",
            topic: "Server Communication" 
        },
        {
            content: "After a call to fetch, the catch function ___" ,
            choice_a: "can only be used once.",
            choice_b: "sets up a handler for when the request is resolved.",
            choice_c: "invokes its callback when there is an error in the request.",
            choice_d: "can only be called after a call to 'then' .",
            correct_answer: "C",
            topic: "Server Communication" 
        },
        {
            content: "Choose the best definition of scope in JavaScript." ,
            choice_a: "the functions that the browser 'knows about' by default.",
            choice_b: "variables and functions get 'hoisted' to the top",
            choice_c: "the value of the variables defined inside a function",
            choice_d: "where declared variables and functions are visible",
            correct_answer: "D",
            topic: "Javascript Events" 
        },
        {
            content: "Through its scope, a function:" ,
            choice_a: "has access to all variables and functions declared in its enclosing scope.",
            choice_b: "has access to all variables and functions declared only in its inner scope.",
            choice_c: "has access to variables and functions declared anywhere.",
            choice_d: "continues to move up the scope chain when it finds a matching identifier in the current scope.",
            correct_answer: "D",
            topic: "Javascript Events" 
        },
        {
            content: "How can a JavaScript event be defined on any DOM node?" ,
            choice_a: "addEventListener()",
            choice_b: "getElementById()",
            choice_c: "querySelector()",
            choice_d: "click()",
            correct_answer: "A",
            topic: "Javascript Events" 
        },
        {
            content: "Which variable keyword will be hoisted?" ,
            choice_a: "let",
            choice_b: "const",
            choice_c: "def",
            choice_d: "var",
            correct_answer: "D",
            topic: "Javascript Events"
        },
        {
            content: "The DOMContentLoaded event fires when:" ,
            choice_a: "the CSS & JavaScript have finished loading.",
            choice_b: "the page's DOM is fully parsed.",
            choice_c: "the page has begun loading.",
            choice_d: "there is an error during the page load.",
            correct_answer: "B",
            explanation: "DOMContentLoaded event fires when your page's DOM is fully parsed. The load event fires when a resource and its dependent resources (CSS, JavaScript) have finished loading",
            topic: "Javascript Events"
        }
    ]
)

questions = Question.all
deck = Deck.find(12)
deck.questions = questions
deck.save 
p "Created #{Question.count} questions"

# questions2 = Question.where(topic: "Javascript Expressions and Operators")
# deck2 = Deck.new(name: "Javascript Expressions and Operators" )
# deck2.questions = questions2
# deck2.user = User.find(1)
# deck2.save

# questions3 = Question.where(topic: "Javascript Fundamentals" )
# deck3 = Deck.new(name: "Javascript Fundamentals"  )
# deck3.questions = questions3
# deck3.user = User.find(1)
# deck3.save